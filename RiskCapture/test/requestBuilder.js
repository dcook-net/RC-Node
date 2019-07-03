module.exports = class requestBuilder {
    constructor(baseUri) {
        const now = new Date();
        let month = this.Tostring(now.getMonth() + 1);
        let day = this.Tostring(now.getDay());
        
        const coverStartDate = `${now.getFullYear()}-${month}-${day}`; 
        
        this.baseUri = baseUri;
        this.method = 'post';
        this.headers = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': 'js-test-lib'};
        this.riskObject = {
            "risk": {
                "CoverStartDate": coverStartDate,
                "MainDriverId": "59f12bde-b003-468d-9f42-90d0cdef5da7",
                "NCDPeriod": {
                    "dataCode": "11",
                    "displayText": "11 Years"
                },
                "PaymentFrequency": {
                    "dataCode": "F",
                    "displayText": "One annual payment"
                },
                "SourceOfNCD": {
                    "dataCode": "1",
                    "displayText": "With this vehicle or a previous vehicle"
                },
                "Vehicle": {
                    "RegistrationLetter": "18",
                    "RegistrationYear": "2018",
                    "AlarmCode": {
                        "dataCode": "99991",
                        "displayText": "Factory Fitted Thatcham Approved Alarm/Immobiliser"
                    },
                    "HasTracker": false,
                    "Imported": false,
                    "CurrentValue": 10000,
                    "VehicleAbiCode": "18504317",
                    "Make": "Ford",
                    "Model": "Fiesta St 3 Ecoboost 200",
                    "BodyType": {
                        "dataCode": "S",
                        "displayText": "SALOON"
                    },
                    "FuelType": {
                        "dataCode": "Petrol",
                        "displayText": "Petrol"
                    },
                    "TransmissionType": {
                        "dataCode": "Manual",
                        "displayText": "Manual"
                    },
                    "DriverSide": {
                        "dataCode": "RHD",
                        "displayText": "Right Hand"
                    },
                    "NumberOfSeats": {
                        "dataCode": "5",
                        "displayText": "5"
                    },
                    "NumberOfDoors": "3DR",
                    "VehicleNotPurchasedYet": true,
                    "EngineSize": "1497"
                },
                "VehicleUsage": {
                    "VehicleIsUsedFor": {
                        "dataCode": "02YN",
                        "displayText": "Social, domestic, pleasure and commuting (SDPC)"
                    },
                    "AnnualPersonalMileage": 8000,
                    "NumberOfVehiclesInHousehold": 2,
                    "OvernightAddress": {
                        "formattedAddress": {
                            "line1": "47 Main Street",
                            "line2": "Yarwell",
                            "line3": "Peterborough",
                            "postcode": "PE8 6PR"
                        }
                    },
                    "OvernightParking": {
                        "dataCode": "4",
                        "displayText": "Drive"
                    },
                    "VehicleKeptDuringTheDay": {
                        "dataCode": "VKD3",
                        "displayText": "Open public car park"
                    }
                },
                "ProposerId": "59f12bde-b003-468d-9f42-90d0cdef5da7",
                "People": [
                    {
                        "FirstName": "David",
                        "LastName": "Cook",
                        "PersonId": "59f12bde-b003-468d-9f42-90d0cdef5da7",
                        "Title": {
                            "dataCode": "MR",
                            "displayText": "Mr"
                        },
                        "RelationshipStatus": {
                            "dataCode": "M",
                            "displayText": "Married"
                        },
                        "DateOfBirth": "1981-02-17",
                        "OwnsHome": true,
                        "HasChildrenUnderSixteen": true,
                        "Address": {
                            "formattedAddress": {
                                "line1": "47 Main Street",
                                "line2": "Yarwell",
                                "line3": "Peterborough",
                                "postcode": "PE8 6PR"
                            }
                        },
                        "EmploymentStatus": {
                            "dataCode": "E",
                            "displayText": "Employed"
                        },
                        "PrimaryOccupation": {
                            "dataCode": "463",
                            "displayText": "Software Engineer"
                        },
                        "PrimaryOccupationBusinessType": {
                            "dataCode": "077",
                            "displayText": "Insurance"
                        },
                        "HasLivedInUKSinceBirth": true,
                        "NumberOfYearsLicenceHeld": {
                            "dataCode": "11",
                            "displayText": "11 Years"
                        },
                        "UseOfAnyOtherVehicle": {
                            "dataCode": "1VE",
                            "displayText": "Own another car or van"
                        },
                        "DrivingLicenceType": {
                            "dataCode": "F",
                            "displayText": "Full UK Car Licence"
                        },
                        "AdditionalMotorQualification": {
                            "dataCode": "DQN",
                            "displayText": "No"
                        },
                        "MedicalCondition": {
                            "dataCode": "DVN",
                            "displayText": "No"
                        },
                        "HasHadInsurancePolicyDeclined": false,
                        "HasNonMotorConvictions": false,
                        "Claims": [

                        ],
                        "Convictions": [

                        ]
                    }
                ],
                "AdditionalDriverIds": [

                ],
                "VehicleRegisteredKeeper": {
                    "PersonId": "59f12bde-b003-468d-9f42-90d0cdef5da7",
                    "TypeOfOwnerKeeper": {
                        "dataCode": "P",
                        "displayText": "Person"
                    }
                },
                "VehicleLegalOwner": {
                    "PersonId": "59f12bde-b003-468d-9f42-90d0cdef5da7",
                    "TypeOfOwnerKeeper": {
                        "dataCode": "P",
                        "displayText": "Person"
                    }
                },
                "ContactDetails": {
                    "EmailAddress": "david_cookj17drc@yahoo.co.uk",
                    "MainTelephoneNumber": "07870326490"
                },
                "CoverType": {
                    "dataCode": "01",
                    "displayText": "Comprehensive"
                },
                "VoluntaryExcess": {
                    "dataCode": "500",
                    "displayText": "£500"
                },
                "ProtectNCD": false
            },
            "metadata": {
                "reason": "ViewPrices",
                "enquiry": {
                    "availableFor": 30,
                    "id": "daac3b85-48cb-409e-866e-f9e755cf2dc2",
                    "requestedId": "188cab5c-8d57-4e16-ad19-072debd68ef1",
                    "riskHash": "932abfbe35c10e34f1e823cb01cf4557803571d81a166bdbae951035dab9bfcd",
                    "reconId": "https://quoting-cluster1.meer-spacestation.co.uk/recons/aHR0cHM6Ly9xdW90aW5nLWNsdXN0ZXIxLm1lZXItc3BhY2VzdGF0aW9uLmNvLnVrL3JlY29ucy9iNWJjNjQ0Zi1jZTY0LTQ1ZGItOWM3YS04MzMzOWEzZmEzZjk",
                    "createdAt": "2019-03-31T20:29:27.6114533+00:00"
                },
                "referringCode": "CM01",
                "visitorId": "d418979c-60e8-431d-a7e7-e50ffc8aea48",
                "sessionId": "df6f42e8-fa89-4b9e-ac2f-c5127db8953f",
                "visitLogId": "6395545985971388416",
                "emailAddress": "david_cookj17drc@yahoo.co.uk",
                "enquirySubject": "Ford Fiesta St 3 Ecoboost 200",
                "createdAt": "2019-04-04T14:41:29.0214384Z",
                "modifiedAt": "2019-04-04T14:41:29.0214384Z",
                "clientIp": "52.208.225.223",
                "outbounding": false,
                "communicationsPreferences": {
                    "email": false,
                    "post": false,
                    "sms": false,
                    "telephone": false,
                    "successfullyLoadedFromCps": true
                },
                "product": "Car",
                "version": "2.1",
                "ctmUserAgent": "car.enquiry-page/1.0.0 (https://car-enquiry-page.comparethemarket.com)",
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
                "termsAndConditionsAccepted": true,
                "termsAndConditionsUri": "https://www.comparethemarket.com/information/terms-and-conditions/",
                "rootEnquiryId": "https://quoting-cluster1.meer-spacestation.co.uk/recons/aHR0cHM6Ly9xdW90aW5nLWNsdXN0ZXIxLm1lZXItc3BhY2VzdGF0aW9uLmNvLnVrL3JlY29ucy9iNWJjNjQ0Zi1jZTY0LTQ1ZGItOWM3YS04MzMzOWEzZmEzZjk",
                "parentEnquiryId": "https://quoting-cluster1.meer-spacestation.co.uk/recons/aHR0cHM6Ly9xdW90aW5nLWNsdXN0ZXIxLm1lZXItc3BhY2VzdGF0aW9uLmNvLnVrL3JlY29ucy9iNWJjNjQ0Zi1jZTY0LTQ1ZGItOWM3YS04MzMzOWEzZmEzZjk",
                "clientDeviceAttributes": "7da44j1eJNlY5BSo9z4ofjb75PaK4Vpjt3Q9cUVlOrXTAxw63UYOKES5jfzmkflJfmNzl998tp7ppfAaZ6m1CdC5MQjGejuTDRNziCvTDfWoeQTPFSJtxFTpZHgfLMC7AeLd7FmrpwoNN5uT2YOK0UjVsYUMnGWFfwMHDCQyG5me6sBLSsbXzU0l6sqKIrGfuzwg9wK9waEwHXXTSHCSPmtd0wVYPIG_qvoPfybYb5EvYTrYesS9araZ6KDUJ6hO3f9p_nH1zDz.ICMpwoNPaIT.xYHrrwURuaDeY8jZ5zaf8ijYm2DdYejftckuyPBDjaY2ftckkCoq75uQ0I5210EQcudISX5Ju30m_dhre9zH_y3CmVug4WC1BStQgN.B89S1ZtG2hixGMuinxFAe2RcDf6NBhq485BQYTrYetvqU1j8xiDyCY5DtTclY5B5UPrVNipIrvjHMsqIUe7SjK1zJOzoUoldWYASJA0GrCJm9fc0V_K16.4JzbN9gkHs45v4J3kJd_CTc5J3vfAKrAT3NQdL9.HGOti4yzGMEis0TgDu6CHKXVPgZ60_dyA3nt8I8.hWrUGOKiJ64XVA4.L9.gJ14Nc1_XV.uxTelF.dWBgJ2MnGmRgJ2MnGmRgJ2ecelF1Vukf4.KQBgJ2bUV8ahrDxNc0NRpAQSaZ6vwLNApw.6fI",
                "serverDeviceAttributes": "rO0ABXNyACdjb20udGhlNDEuY29tbW9ucy5jcnlwdG8uQ3J5cHRvRW52ZWxvcGUAAJbgqPhc8wIAA0wABWFsaWFzdAASTGphdmEvbGFuZy9TdHJpbmc7WwAMZW5jcnlwdGVkS2V5dAACW0JbABBlbmNyeXB0ZWRQYXlsb2FkcQB-AAJ4cHQABGhkaW11cgACW0Ks8xf4BghU4AIAAHhwAAACAHZ5w_fpu9Ay_rvf36nsaxlRqBCgOrukgZVSJrlIgeuoD9S3xf6yTEEtHISt62kedH29VeFi3ul9bNPamVCrrpuvFhCiUtwuNj8vvaYtL_3OoBsOUpo4QAJeTZjiTCTYXy-xfVK6kYXKBZkm7ZSiYiLIyAY1LhsULA8jaWUTFn-Vs3MkDdB6S-XYZa7P4MNki9TTJCiAan7tx8TQrwSOptpP7f_BcP5K3l5zdRGGVP8on5QOV2H3I0j4bBZP4NvQLEuWYz_PowZLoKK9uV_4FC9CVeUl4j0qvj5J5tB4mYoqrkEKl6Zm7zMCQCiQslo-_Nesb9A3X-l4wFI3IUQjFdEvXzfZwmT6hggzIR1e-852FS819YTxXBICJdV_xCOarEPkPXiKZ1LdAqoBxM9PVww61PtILZnW-drOGalVRUOXMXWuFbOrs5zYC9uOBLVai1QHDuDc9LH0IYgrbfGIE4lIx9Xef-BR77akbIhtRhgDpUF8gPbsrx5KPyNfoREu47rgvnch4nH-QvSgCSuqvGVmjmS_zzAxyLihGzSiDaXGoP6pqNcS9UgqhsQeVuox6Ejc14-n_JPUxXEderFU5UjpdUt-ZJKB8v0gOABkcNUEZNxLAIbTuNGxa76G9QfBTkDC7aWQytb7HPHyK7re7xdtn_0h-LWvHtvLWq-ye00jdXEAfgAFAAACUM6qKEh1CQ5Ug3vrlVfKq3LFi1-He_fd8kAv7x2TJ6cNPdRuBkg763Eq8MsBFV6AGNAMpzmXcUVDOfLWCtCKbdSztewoAGyEajotaweb8TXUkDUWwiG3nfb9YFsVcomWuhWv7WVp5nJoIhWVUC6jhQtHyNY1FLVksysuHdcIJCcXkCQuVqEQBPo0TwI9XjhfTtB9IGACEzaaWMV47vcGn4vivCeT8lQ11Q2hXv6wrgR8Q9mQ7ENAdIgmpSLPUaNZvs88SyGIeZSo-uq3x-XkJAxvCl-wcoY-b3DGU9nEtlIMonD7aAwE8CRbye9q0lL4jNaISdiaKXL8pweNiqY4ZetBYQ4BRYUivZs0i7Ae_hsNQZ2UOwZG5iK4N17zO15OxzpdAwqUNJI1OndsJOALI89ovSwVmTDIkVf43-f53d5BgPoYZvxKAtQKsmrWrGNZDEV-LrJbaQfWMkz3GI_actuUW0aUe_f5uUvk2NvN6S827RyB01UslyqAlBp7o0T6s-CJIP3qu7W9Oaw1fR7lwnknQ7IQmRNIRlWPukShuWnS-D68t8NO8BdUSbsuxUyJAQOt2_VUNOuS_0RHN3texY1uOgEEXgt-eUt2ndHz0kXyNnd8nJq6c8lSZ6_pb6NBCXttIUWpNFChGWR-Utc60lfzAA04pcaMvR3W9VHjJHPrEtfOOusnjwxjxT2kLdkxULVFcszfLGdmMlNQCpzm1-hI3Hw7F0lqneE11_MK8GBn0I71LjvwGJNx8TIJAPuETNZSaqVi-8U2Yk_RW7cv7TU",
                "prepopulated": [

                ],
                "defaulted": [

                ],
                "autoModified": [

                ],
                "featureToggles": [

                ]
            },
            "features": [
                {
                    "code": "PersonalAccident",
                    "value": false
                },
                {
                    "code": "CourtesyCar",
                    "value": false
                },
                {
                    "code": "Breakdown",
                    "value": false
                },
                {
                    "code": "Legal",
                    "value": false
                }
            ]
        };
    };
    
    Tostring(number){
        return (number < 10) ? `0${number}` : number;
    };

    withHeaders(requestHeaders) {
        this.headers = requestHeaders;
        return this;
    };
    
    withMethod(method) {
        this.method = method;
        return this;
    };
    
    withRisk(risk){
        this.riskObject = risk;
        return this;
    };
    
    build() {
        return {
            uri: this.baseUri,
            method: this.method,
            headers: this.headers,
            json: true,
            resolveWithFullResponse: true,
            simple: false,
            body : this.riskObject
        };  
    };
};