
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///Обслуживает планирование собеседований
	///</summary>
	[DataContract]
	public enum ИнтервалыВремени
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///00:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"d9d8ce50-a0fb-48a1-8125-bb766a36420d\", \"Представление\":\"Интервал1\"}")]
		Интервал1 = 0,//00:00
	///<summary>
	///00:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e00e5e18-55be-47a8-9580-2657f23eba1b\", \"Представление\":\"Интервал2\"}")]
		Интервал2 = 1,//00:30
	///<summary>
	///01:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e995ae40-10c6-41c9-bfde-8c50a1d67b07\", \"Представление\":\"Интервал3\"}")]
		Интервал3 = 2,//01:00
	///<summary>
	///01:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"da7f9fc5-672f-4647-aceb-b9bf3b4e6797\", \"Представление\":\"Интервал4\"}")]
		Интервал4 = 3,//01:30
	///<summary>
	///02:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"6ae8f34a-13d9-4d26-91e0-241f41aa881d\", \"Представление\":\"Интервал5\"}")]
		Интервал5 = 4,//02:00
	///<summary>
	///02:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"673be542-a959-4fa5-8351-3589551b5ac1\", \"Представление\":\"Интервал6\"}")]
		Интервал6 = 5,//02:30
	///<summary>
	///03:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"f7f3e332-ac6e-4308-a661-86778db05b99\", \"Представление\":\"Интервал7\"}")]
		Интервал7 = 6,//03:00
	///<summary>
	///03:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"1fe99524-449d-48d3-b50c-eab8f0060db5\", \"Представление\":\"Интервал8\"}")]
		Интервал8 = 7,//03:30
	///<summary>
	///04:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e4a2ca00-9dbc-4ce6-ac3a-91b1c72b2b18\", \"Представление\":\"Интервал9\"}")]
		Интервал9 = 8,//04:00
	///<summary>
	///04:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"41d27af4-0441-453b-81d6-914d4f24c386\", \"Представление\":\"Интервал10\"}")]
		Интервал10 = 9,//04:30
	///<summary>
	///05:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"9ebf8146-39ac-4c58-be8b-37d1db4ead26\", \"Представление\":\"Интервал11\"}")]
		Интервал11 = 10,//05:00
	///<summary>
	///05:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"8cd75b10-54e8-4fe3-8568-bd19502433d1\", \"Представление\":\"Интервал12\"}")]
		Интервал12 = 11,//05:30
	///<summary>
	///06:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"dd747f65-23d1-41ea-986a-f2051a2c579c\", \"Представление\":\"Интервал13\"}")]
		Интервал13 = 12,//06:00
	///<summary>
	///06:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"43548b4a-a956-42d7-ad94-528bba50c3e1\", \"Представление\":\"Интервал14\"}")]
		Интервал14 = 13,//06:30
	///<summary>
	///07:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"d5d63991-7d7c-4e5a-8fd6-3f4e617047da\", \"Представление\":\"Интервал15\"}")]
		Интервал15 = 14,//07:00
	///<summary>
	///07:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"5782099f-13b2-44a4-867e-c01892ac60be\", \"Представление\":\"Интервал16\"}")]
		Интервал16 = 15,//07:30
	///<summary>
	///08:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c4d83aef-a74c-4bc0-ad6a-e13994dc8238\", \"Представление\":\"Интервал17\"}")]
		Интервал17 = 16,//08:00 
	///<summary>
	///08:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"520300fb-0ea3-4485-829c-4756a775322d\", \"Представление\":\"Интервал18\"}")]
		Интервал18 = 17,//08:30
	///<summary>
	///09:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"b32b2a93-16e2-4ede-9beb-39e08b16b34d\", \"Представление\":\"Интервал19\"}")]
		Интервал19 = 18,//09:00
	///<summary>
	///09:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"b308f8f6-ae9f-485a-a28d-17ca4303336a\", \"Представление\":\"Интервал20\"}")]
		Интервал20 = 19,//09:30
	///<summary>
	///10:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"736f2d2d-4176-4fc5-ae16-d681abdc5f43\", \"Представление\":\"Интервал21\"}")]
		Интервал21 = 20,//10:00
	///<summary>
	///10:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"aebdc915-dcce-4c90-9201-ce6a3d4e06a2\", \"Представление\":\"Интервал22\"}")]
		Интервал22 = 21,//10:30
	///<summary>
	///11:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"ebfa7917-8a23-4cc8-82ab-ab543005d836\", \"Представление\":\"Интервал23\"}")]
		Интервал23 = 22,//11:00
	///<summary>
	///11:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c528b54e-658f-42bd-b238-435754f957fd\", \"Представление\":\"Интервал24\"}")]
		Интервал24 = 23,//11:30
	///<summary>
	///12:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"946ac559-f8a6-42ca-b127-e8eedbfa9464\", \"Представление\":\"Интервал25\"}")]
		Интервал25 = 24,//12:00
	///<summary>
	///12:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"b25f884a-b5b7-4eb3-a536-071b37bdb5cc\", \"Представление\":\"Интервал26\"}")]
		Интервал26 = 25,//12:30
	///<summary>
	///13:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"a0e3da00-4bc2-4395-bc1d-1c7b5b3af091\", \"Представление\":\"Интервал27\"}")]
		Интервал27 = 26,//13:00
	///<summary>
	///13:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"247409e1-2fff-4f1c-bcb6-fb34fcb44be8\", \"Представление\":\"Интервал28\"}")]
		Интервал28 = 27,//13:30
	///<summary>
	///14:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"fbe49635-7ea7-453d-86ce-2756ecc5cc4c\", \"Представление\":\"Интервал29\"}")]
		Интервал29 = 28,//14:00
	///<summary>
	///14:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c48eb875-b1cf-4572-8a81-3be1fbfddf2a\", \"Представление\":\"Интервал30\"}")]
		Интервал30 = 29,//14:30
	///<summary>
	///15:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"218d3d20-4080-47f1-a0f4-e92d562dcabd\", \"Представление\":\"Интервал31\"}")]
		Интервал31 = 30,//15:00
	///<summary>
	///15:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"adce824a-a24f-40f9-9473-e660b9e7a6bc\", \"Представление\":\"Интервал32\"}")]
		Интервал32 = 31,//15:30
	///<summary>
	///16:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"80a76a70-189f-42b3-b8a8-670d87992721\", \"Представление\":\"Интервал33\"}")]
		Интервал33 = 32,//16:00
	///<summary>
	///16:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c362b14a-9fef-43b6-b60c-8965eee347c9\", \"Представление\":\"Интервал34\"}")]
		Интервал34 = 33,//16:30
	///<summary>
	///17:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"5f95d6dd-7870-4854-b652-e59d8da1f9ab\", \"Представление\":\"Интервал35\"}")]
		Интервал35 = 34,//17:00
	///<summary>
	///17:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"eb76d9ea-02d6-4975-bf35-da1b70a054b8\", \"Представление\":\"Интервал36\"}")]
		Интервал36 = 35,//17:30
	///<summary>
	///18:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"2afb06a8-1e0f-4d02-ae55-9ef40d7d60f8\", \"Представление\":\"Интервал37\"}")]
		Интервал37 = 36,//18:00
	///<summary>
	///18:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"537ff2e1-e63f-4fa5-a762-b2c6214dfe73\", \"Представление\":\"Интервал38\"}")]
		Интервал38 = 37,//18:30
	///<summary>
	///19:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"14246da4-71a0-4f3c-b028-7914f11c53f2\", \"Представление\":\"Интервал39\"}")]
		Интервал39 = 38,//19:00
	///<summary>
	///19:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c7e434f9-2de4-4683-aae4-540043c98763\", \"Представление\":\"Интервал40\"}")]
		Интервал40 = 39,//19:30
	///<summary>
	///20:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"68ef501c-751a-4d17-9990-9624245be1b3\", \"Представление\":\"Интервал41\"}")]
		Интервал41 = 40,//20:00
	///<summary>
	///20:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"054743e1-ee0d-462e-8706-b569a0b660f3\", \"Представление\":\"Интервал42\"}")]
		Интервал42 = 41,//20:30
	///<summary>
	///21:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"0e060e3f-0d3b-4c1e-84af-9a91cbb4fd53\", \"Представление\":\"Интервал43\"}")]
		Интервал43 = 42,//21:00
	///<summary>
	///21:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c291d0d1-8ceb-4819-9b3a-4852ad1141a7\", \"Представление\":\"Интервал44\"}")]
		Интервал44 = 43,//21:30
	///<summary>
	///22:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"d8c25705-4866-4bf6-8d10-62ce3b53d245\", \"Представление\":\"Интервал45\"}")]
		Интервал45 = 44,//22:00
	///<summary>
	///22:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c5e047c3-e92f-4f7c-a0f2-9d98eadb482f\", \"Представление\":\"Интервал46\"}")]
		Интервал46 = 45,//22:30
	///<summary>
	///23:00
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"36754baa-e25e-41b0-a4f8-061ac233af28\", \"Представление\":\"Интервал47\"}")]
		Интервал47 = 46,//23:00
	///<summary>
	///23:30
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"bd7c1b0d-e766-45d3-813f-55e37ee4997a\", \"Представление\":\"Интервал48\"}")]
		Интервал48 = 47,//23:30
	}
	public static partial class ИнтервалыВремени_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///00:00
		///</summary>
		public static readonly Guid Интервал1 = new Guid("76bb2581-366a-0d42-48a1-a0fbd9d8ce50");//00:00
		///<summary>
		///00:30
		///</summary>
		public static readonly Guid Интервал2 = new Guid("57268095-3ef2-1bba-47a8-55bee00e5e18");//00:30
		///<summary>
		///01:00
		///</summary>
		public static readonly Guid Интервал3 = new Guid("508cdebf-d6a1-077b-41c9-10c6e995ae40");//01:00
		///<summary>
		///01:30
		///</summary>
		public static readonly Guid Интервал4 = new Guid("bfb9ebac-4e3b-9767-4647-672fda7f9fc5");//01:30
		///<summary>
		///02:00
		///</summary>
		public static readonly Guid Интервал5 = new Guid("1f24e091-aa41-1d88-4d26-13d96ae8f34a");//02:00
		///<summary>
		///02:30
		///</summary>
		public static readonly Guid Интервал6 = new Guid("89355183-1b55-c15a-4fa5-a959673be542");//02:30
		///<summary>
		///03:00
		///</summary>
		public static readonly Guid Интервал7 = new Guid("778661a6-b08d-995b-4308-ac6ef7f3e332");//03:00
		///<summary>
		///03:30
		///</summary>
		public static readonly Guid Интервал8 = new Guid("b8ea0cb5-06f0-b50d-48d3-449d1fe99524");//03:30
		///<summary>
		///04:00
		///</summary>
		public static readonly Guid Интервал9 = new Guid("b1913aac-2bc7-182b-4ce6-9dbce4a2ca00");//04:00
		///<summary>
		///04:30
		///</summary>
		public static readonly Guid Интервал10 = new Guid("4d91d681-244f-86c3-453b-044141d27af4");//04:30
		///<summary>
		///05:00
		///</summary>
		public static readonly Guid Интервал11 = new Guid("d1378bbe-4edb-26ad-4c58-39ac9ebf8146");//05:00
		///<summary>
		///05:30
		///</summary>
		public static readonly Guid Интервал12 = new Guid("19bd6885-2450-d133-4fe3-54e88cd75b10");//05:30
		///<summary>
		///06:00
		///</summary>
		public static readonly Guid Интервал13 = new Guid("05f26a98-2c1a-9c57-41ea-23d1dd747f65");//06:00
		///<summary>
		///06:30
		///</summary>
		public static readonly Guid Интервал14 = new Guid("8b5294ad-50ba-e1c3-42d7-a95643548b4a");//06:30
		///<summary>
		///07:00
		///</summary>
		public static readonly Guid Интервал15 = new Guid("4e3fd68f-7061-da47-4e5a-7d7cd5d63991");//07:00
		///<summary>
		///07:30
		///</summary>
		public static readonly Guid Интервал16 = new Guid("18c07e86-ac92-be60-44a4-13b25782099f");//07:30
		///<summary>
		///08:00
		///</summary>
		public static readonly Guid Интервал17 = new Guid("39e16aad-dc94-3882-4bc0-a74cc4d83aef");//08:00 
		///<summary>
		///08:30
		///</summary>
		public static readonly Guid Интервал18 = new Guid("56479c82-75a7-2d32-4485-0ea3520300fb");//08:30
		///<summary>
		///09:00
		///</summary>
		public static readonly Guid Интервал19 = new Guid("e039eb9b-168b-4db3-4ede-16e2b32b2a93");//09:00
		///<summary>
		///09:30
		///</summary>
		public static readonly Guid Интервал20 = new Guid("ca178da2-0343-6a33-485a-ae9fb308f8f6");//09:30
		///<summary>
		///10:00
		///</summary>
		public static readonly Guid Интервал21 = new Guid("81d616ae-dcab-435f-4fc5-4176736f2d2d");//10:00
		///<summary>
		///10:30
		///</summary>
		public static readonly Guid Интервал22 = new Guid("6ace0192-4e3d-a206-4c90-dcceaebdc915");//10:30
		///<summary>
		///11:00
		///</summary>
		public static readonly Guid Интервал23 = new Guid("54abab82-0530-36d8-4cc8-8a23ebfa7917");//11:00
		///<summary>
		///11:30
		///</summary>
		public static readonly Guid Интервал24 = new Guid("574338b2-f954-fd57-42bd-658fc528b54e");//11:30
		///<summary>
		///12:00
		///</summary>
		public static readonly Guid Интервал25 = new Guid("eee827b1-fadb-6494-42ca-f8a6946ac559");//12:00
		///<summary>
		///12:30
		///</summary>
		public static readonly Guid Интервал26 = new Guid("1b0736a5-bd37-ccb5-4eb3-b5b7b25f884a");//12:30
		///<summary>
		///13:00
		///</summary>
		public static readonly Guid Интервал27 = new Guid("7b1c1dbc-3a5b-91f0-4395-4bc2a0e3da00");//13:00
		///<summary>
		///13:30
		///</summary>
		public static readonly Guid Интервал28 = new Guid("34fbb6bc-b4fc-e84b-4f1c-2fff247409e1");//13:30
		///<summary>
		///14:00
		///</summary>
		public static readonly Guid Интервал29 = new Guid("5627ce86-c5ec-4ccc-453d-7ea7fbe49635");//14:00
		///<summary>
		///14:30
		///</summary>
		public static readonly Guid Интервал30 = new Guid("e13b818a-fdfb-2adf-4572-b1cfc48eb875");//14:30
		///<summary>
		///15:00
		///</summary>
		public static readonly Guid Интервал31 = new Guid("2de9f4a0-2d56-bdca-47f1-4080218d3d20");//15:00
		///<summary>
		///15:30
		///</summary>
		public static readonly Guid Интервал32 = new Guid("60e67394-e7b9-bca6-40f9-a24fadce824a");//15:30
		///<summary>
		///16:00
		///</summary>
		public static readonly Guid Интервал33 = new Guid("0d67a8b8-9987-2127-42b3-189f80a76a70");//16:00
		///<summary>
		///16:30
		///</summary>
		public static readonly Guid Интервал34 = new Guid("65890cb6-e3ee-c947-43b6-9fefc362b14a");//16:30
		///<summary>
		///17:00
		///</summary>
		public static readonly Guid Интервал35 = new Guid("9de552b6-a18d-abf9-4854-78705f95d6dd");//17:00
		///<summary>
		///17:30
		///</summary>
		public static readonly Guid Интервал36 = new Guid("1bda35bf-a070-b854-4975-02d6eb76d9ea");//17:30
		///<summary>
		///18:00
		///</summary>
		public static readonly Guid Интервал37 = new Guid("f49e55ae-7d0d-f860-4d02-1e0f2afb06a8");//18:00
		///<summary>
		///18:30
		///</summary>
		public static readonly Guid Интервал38 = new Guid("c6b262a7-4d21-73fe-4fa5-e63f537ff2e1");//18:30
		///<summary>
		///19:00
		///</summary>
		public static readonly Guid Интервал39 = new Guid("147928b0-1cf1-f253-4f3c-71a014246da4");//19:00
		///<summary>
		///19:30
		///</summary>
		public static readonly Guid Интервал40 = new Guid("0054e4aa-c943-6387-4683-2de4c7e434f9");//19:30
		///<summary>
		///20:00
		///</summary>
		public static readonly Guid Интервал41 = new Guid("24969099-5b24-b3e1-4d17-751a68ef501c");//20:00
		///<summary>
		///20:30
		///</summary>
		public static readonly Guid Интервал42 = new Guid("69b50687-b6a0-f360-462e-ee0d054743e1");//20:30
		///<summary>
		///21:00
		///</summary>
		public static readonly Guid Интервал43 = new Guid("919aaf84-b4cb-53fd-4c1e-0d3b0e060e3f");//21:00
		///<summary>
		///21:30
		///</summary>
		public static readonly Guid Интервал44 = new Guid("52483a9b-11ad-a741-4819-8cebc291d0d1");//21:30
		///<summary>
		///22:00
		///</summary>
		public static readonly Guid Интервал45 = new Guid("ce62108d-533b-45d2-4bf6-4866d8c25705");//22:00
		///<summary>
		///22:30
		///</summary>
		public static readonly Guid Интервал46 = new Guid("989df2a0-dbea-2f48-4f7c-e92fc5e047c3");//22:30
		///<summary>
		///23:00
		///</summary>
		public static readonly Guid Интервал47 = new Guid("1a06f8a4-33c2-28af-41b0-e25e36754baa");//23:00
		///<summary>
		///23:30
		///</summary>
		public static readonly Guid Интервал48 = new Guid("e3553f81-e47e-7a99-45d3-e766bd7c1b0d");//23:30
		public static ИнтервалыВремени Получить(this ИнтервалыВремени Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ИнтервалыВремени Получить(this ИнтервалыВремени Значение, Guid Ссылка)
		{
			if(Ссылка == Интервал1)
			{
				return ИнтервалыВремени.Интервал1;
			}
			else if(Ссылка == Интервал2)
			{
				return ИнтервалыВремени.Интервал2;
			}
			else if(Ссылка == Интервал3)
			{
				return ИнтервалыВремени.Интервал3;
			}
			else if(Ссылка == Интервал4)
			{
				return ИнтервалыВремени.Интервал4;
			}
			else if(Ссылка == Интервал5)
			{
				return ИнтервалыВремени.Интервал5;
			}
			else if(Ссылка == Интервал6)
			{
				return ИнтервалыВремени.Интервал6;
			}
			else if(Ссылка == Интервал7)
			{
				return ИнтервалыВремени.Интервал7;
			}
			else if(Ссылка == Интервал8)
			{
				return ИнтервалыВремени.Интервал8;
			}
			else if(Ссылка == Интервал9)
			{
				return ИнтервалыВремени.Интервал9;
			}
			else if(Ссылка == Интервал10)
			{
				return ИнтервалыВремени.Интервал10;
			}
			else if(Ссылка == Интервал11)
			{
				return ИнтервалыВремени.Интервал11;
			}
			else if(Ссылка == Интервал12)
			{
				return ИнтервалыВремени.Интервал12;
			}
			else if(Ссылка == Интервал13)
			{
				return ИнтервалыВремени.Интервал13;
			}
			else if(Ссылка == Интервал14)
			{
				return ИнтервалыВремени.Интервал14;
			}
			else if(Ссылка == Интервал15)
			{
				return ИнтервалыВремени.Интервал15;
			}
			else if(Ссылка == Интервал16)
			{
				return ИнтервалыВремени.Интервал16;
			}
			else if(Ссылка == Интервал17)
			{
				return ИнтервалыВремени.Интервал17;
			}
			else if(Ссылка == Интервал18)
			{
				return ИнтервалыВремени.Интервал18;
			}
			else if(Ссылка == Интервал19)
			{
				return ИнтервалыВремени.Интервал19;
			}
			else if(Ссылка == Интервал20)
			{
				return ИнтервалыВремени.Интервал20;
			}
			else if(Ссылка == Интервал21)
			{
				return ИнтервалыВремени.Интервал21;
			}
			else if(Ссылка == Интервал22)
			{
				return ИнтервалыВремени.Интервал22;
			}
			else if(Ссылка == Интервал23)
			{
				return ИнтервалыВремени.Интервал23;
			}
			else if(Ссылка == Интервал24)
			{
				return ИнтервалыВремени.Интервал24;
			}
			else if(Ссылка == Интервал25)
			{
				return ИнтервалыВремени.Интервал25;
			}
			else if(Ссылка == Интервал26)
			{
				return ИнтервалыВремени.Интервал26;
			}
			else if(Ссылка == Интервал27)
			{
				return ИнтервалыВремени.Интервал27;
			}
			else if(Ссылка == Интервал28)
			{
				return ИнтервалыВремени.Интервал28;
			}
			else if(Ссылка == Интервал29)
			{
				return ИнтервалыВремени.Интервал29;
			}
			else if(Ссылка == Интервал30)
			{
				return ИнтервалыВремени.Интервал30;
			}
			else if(Ссылка == Интервал31)
			{
				return ИнтервалыВремени.Интервал31;
			}
			else if(Ссылка == Интервал32)
			{
				return ИнтервалыВремени.Интервал32;
			}
			else if(Ссылка == Интервал33)
			{
				return ИнтервалыВремени.Интервал33;
			}
			else if(Ссылка == Интервал34)
			{
				return ИнтервалыВремени.Интервал34;
			}
			else if(Ссылка == Интервал35)
			{
				return ИнтервалыВремени.Интервал35;
			}
			else if(Ссылка == Интервал36)
			{
				return ИнтервалыВремени.Интервал36;
			}
			else if(Ссылка == Интервал37)
			{
				return ИнтервалыВремени.Интервал37;
			}
			else if(Ссылка == Интервал38)
			{
				return ИнтервалыВремени.Интервал38;
			}
			else if(Ссылка == Интервал39)
			{
				return ИнтервалыВремени.Интервал39;
			}
			else if(Ссылка == Интервал40)
			{
				return ИнтервалыВремени.Интервал40;
			}
			else if(Ссылка == Интервал41)
			{
				return ИнтервалыВремени.Интервал41;
			}
			else if(Ссылка == Интервал42)
			{
				return ИнтервалыВремени.Интервал42;
			}
			else if(Ссылка == Интервал43)
			{
				return ИнтервалыВремени.Интервал43;
			}
			else if(Ссылка == Интервал44)
			{
				return ИнтервалыВремени.Интервал44;
			}
			else if(Ссылка == Интервал45)
			{
				return ИнтервалыВремени.Интервал45;
			}
			else if(Ссылка == Интервал46)
			{
				return ИнтервалыВремени.Интервал46;
			}
			else if(Ссылка == Интервал47)
			{
				return ИнтервалыВремени.Интервал47;
			}
			else if(Ссылка == Интервал48)
			{
				return ИнтервалыВремени.Интервал48;
			}
			return ИнтервалыВремени.ПустаяСсылка;
		}
		public static byte[] Ключ(this ИнтервалыВремени Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ИнтервалыВремени Значение)
		{
			switch (Значение)
			{
				case ИнтервалыВремени.Интервал1: return Интервал1;
				case ИнтервалыВремени.Интервал2: return Интервал2;
				case ИнтервалыВремени.Интервал3: return Интервал3;
				case ИнтервалыВремени.Интервал4: return Интервал4;
				case ИнтервалыВремени.Интервал5: return Интервал5;
				case ИнтервалыВремени.Интервал6: return Интервал6;
				case ИнтервалыВремени.Интервал7: return Интервал7;
				case ИнтервалыВремени.Интервал8: return Интервал8;
				case ИнтервалыВремени.Интервал9: return Интервал9;
				case ИнтервалыВремени.Интервал10: return Интервал10;
				case ИнтервалыВремени.Интервал11: return Интервал11;
				case ИнтервалыВремени.Интервал12: return Интервал12;
				case ИнтервалыВремени.Интервал13: return Интервал13;
				case ИнтервалыВремени.Интервал14: return Интервал14;
				case ИнтервалыВремени.Интервал15: return Интервал15;
				case ИнтервалыВремени.Интервал16: return Интервал16;
				case ИнтервалыВремени.Интервал17: return Интервал17;
				case ИнтервалыВремени.Интервал18: return Интервал18;
				case ИнтервалыВремени.Интервал19: return Интервал19;
				case ИнтервалыВремени.Интервал20: return Интервал20;
				case ИнтервалыВремени.Интервал21: return Интервал21;
				case ИнтервалыВремени.Интервал22: return Интервал22;
				case ИнтервалыВремени.Интервал23: return Интервал23;
				case ИнтервалыВремени.Интервал24: return Интервал24;
				case ИнтервалыВремени.Интервал25: return Интервал25;
				case ИнтервалыВремени.Интервал26: return Интервал26;
				case ИнтервалыВремени.Интервал27: return Интервал27;
				case ИнтервалыВремени.Интервал28: return Интервал28;
				case ИнтервалыВремени.Интервал29: return Интервал29;
				case ИнтервалыВремени.Интервал30: return Интервал30;
				case ИнтервалыВремени.Интервал31: return Интервал31;
				case ИнтервалыВремени.Интервал32: return Интервал32;
				case ИнтервалыВремени.Интервал33: return Интервал33;
				case ИнтервалыВремени.Интервал34: return Интервал34;
				case ИнтервалыВремени.Интервал35: return Интервал35;
				case ИнтервалыВремени.Интервал36: return Интервал36;
				case ИнтервалыВремени.Интервал37: return Интервал37;
				case ИнтервалыВремени.Интервал38: return Интервал38;
				case ИнтервалыВремени.Интервал39: return Интервал39;
				case ИнтервалыВремени.Интервал40: return Интервал40;
				case ИнтервалыВремени.Интервал41: return Интервал41;
				case ИнтервалыВремени.Интервал42: return Интервал42;
				case ИнтервалыВремени.Интервал43: return Интервал43;
				case ИнтервалыВремени.Интервал44: return Интервал44;
				case ИнтервалыВремени.Интервал45: return Интервал45;
				case ИнтервалыВремени.Интервал46: return Интервал46;
				case ИнтервалыВремени.Интервал47: return Интервал47;
				case ИнтервалыВремени.Интервал48: return Интервал48;
			}
			return Guid.Empty;
		}
	}
}