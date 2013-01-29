
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///ќбслуживает планирование собеседований
		///</summary>
	public enum »нтервалы¬ремени
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///00:00
	///</summary>
		»нтервал1 = 0,//00:00
	///<summary>
	///00:30
	///</summary>
		»нтервал2 = 1,//00:30
	///<summary>
	///01:00
	///</summary>
		»нтервал3 = 2,//01:00
	///<summary>
	///01:30
	///</summary>
		»нтервал4 = 3,//01:30
	///<summary>
	///02:00
	///</summary>
		»нтервал5 = 4,//02:00
	///<summary>
	///02:30
	///</summary>
		»нтервал6 = 5,//02:30
	///<summary>
	///03:00
	///</summary>
		»нтервал7 = 6,//03:00
	///<summary>
	///03:30
	///</summary>
		»нтервал8 = 7,//03:30
	///<summary>
	///04:00
	///</summary>
		»нтервал9 = 8,//04:00
	///<summary>
	///04:30
	///</summary>
		»нтервал10 = 9,//04:30
	///<summary>
	///05:00
	///</summary>
		»нтервал11 = 10,//05:00
	///<summary>
	///05:30
	///</summary>
		»нтервал12 = 11,//05:30
	///<summary>
	///06:00
	///</summary>
		»нтервал13 = 12,//06:00
	///<summary>
	///06:30
	///</summary>
		»нтервал14 = 13,//06:30
	///<summary>
	///07:00
	///</summary>
		»нтервал15 = 14,//07:00
	///<summary>
	///07:30
	///</summary>
		»нтервал16 = 15,//07:30
	///<summary>
	///08:00
	///</summary>
		»нтервал17 = 16,//08:00 
	///<summary>
	///08:30
	///</summary>
		»нтервал18 = 17,//08:30
	///<summary>
	///09:00
	///</summary>
		»нтервал19 = 18,//09:00
	///<summary>
	///09:30
	///</summary>
		»нтервал20 = 19,//09:30
	///<summary>
	///10:00
	///</summary>
		»нтервал21 = 20,//10:00
	///<summary>
	///10:30
	///</summary>
		»нтервал22 = 21,//10:30
	///<summary>
	///11:00
	///</summary>
		»нтервал23 = 22,//11:00
	///<summary>
	///11:30
	///</summary>
		»нтервал24 = 23,//11:30
	///<summary>
	///12:00
	///</summary>
		»нтервал25 = 24,//12:00
	///<summary>
	///12:30
	///</summary>
		»нтервал26 = 25,//12:30
	///<summary>
	///13:00
	///</summary>
		»нтервал27 = 26,//13:00
	///<summary>
	///13:30
	///</summary>
		»нтервал28 = 27,//13:30
	///<summary>
	///14:00
	///</summary>
		»нтервал29 = 28,//14:00
	///<summary>
	///14:30
	///</summary>
		»нтервал30 = 29,//14:30
	///<summary>
	///15:00
	///</summary>
		»нтервал31 = 30,//15:00
	///<summary>
	///15:30
	///</summary>
		»нтервал32 = 31,//15:30
	///<summary>
	///16:00
	///</summary>
		»нтервал33 = 32,//16:00
	///<summary>
	///16:30
	///</summary>
		»нтервал34 = 33,//16:30
	///<summary>
	///17:00
	///</summary>
		»нтервал35 = 34,//17:00
	///<summary>
	///17:30
	///</summary>
		»нтервал36 = 35,//17:30
	///<summary>
	///18:00
	///</summary>
		»нтервал37 = 36,//18:00
	///<summary>
	///18:30
	///</summary>
		»нтервал38 = 37,//18:30
	///<summary>
	///19:00
	///</summary>
		»нтервал39 = 38,//19:00
	///<summary>
	///19:30
	///</summary>
		»нтервал40 = 39,//19:30
	///<summary>
	///20:00
	///</summary>
		»нтервал41 = 40,//20:00
	///<summary>
	///20:30
	///</summary>
		»нтервал42 = 41,//20:30
	///<summary>
	///21:00
	///</summary>
		»нтервал43 = 42,//21:00
	///<summary>
	///21:30
	///</summary>
		»нтервал44 = 43,//21:30
	///<summary>
	///22:00
	///</summary>
		»нтервал45 = 44,//22:00
	///<summary>
	///22:30
	///</summary>
		»нтервал46 = 45,//22:30
	///<summary>
	///23:00
	///</summary>
		»нтервал47 = 46,//23:00
	///<summary>
	///23:30
	///</summary>
		»нтервал48 = 47,//23:30
	}
	public static partial class »нтервалы¬ремени_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///00:00
		///</summary>
		public static readonly Guid »нтервал1 = new Guid("76bb2581-366a-0d42-48a1-a0fbd9d8ce50");//00:00
		///<summary>
		///00:30
		///</summary>
		public static readonly Guid »нтервал2 = new Guid("57268095-3ef2-1bba-47a8-55bee00e5e18");//00:30
		///<summary>
		///01:00
		///</summary>
		public static readonly Guid »нтервал3 = new Guid("508cdebf-d6a1-077b-41c9-10c6e995ae40");//01:00
		///<summary>
		///01:30
		///</summary>
		public static readonly Guid »нтервал4 = new Guid("bfb9ebac-4e3b-9767-4647-672fda7f9fc5");//01:30
		///<summary>
		///02:00
		///</summary>
		public static readonly Guid »нтервал5 = new Guid("1f24e091-aa41-1d88-4d26-13d96ae8f34a");//02:00
		///<summary>
		///02:30
		///</summary>
		public static readonly Guid »нтервал6 = new Guid("89355183-1b55-c15a-4fa5-a959673be542");//02:30
		///<summary>
		///03:00
		///</summary>
		public static readonly Guid »нтервал7 = new Guid("778661a6-b08d-995b-4308-ac6ef7f3e332");//03:00
		///<summary>
		///03:30
		///</summary>
		public static readonly Guid »нтервал8 = new Guid("b8ea0cb5-06f0-b50d-48d3-449d1fe99524");//03:30
		///<summary>
		///04:00
		///</summary>
		public static readonly Guid »нтервал9 = new Guid("b1913aac-2bc7-182b-4ce6-9dbce4a2ca00");//04:00
		///<summary>
		///04:30
		///</summary>
		public static readonly Guid »нтервал10 = new Guid("4d91d681-244f-86c3-453b-044141d27af4");//04:30
		///<summary>
		///05:00
		///</summary>
		public static readonly Guid »нтервал11 = new Guid("d1378bbe-4edb-26ad-4c58-39ac9ebf8146");//05:00
		///<summary>
		///05:30
		///</summary>
		public static readonly Guid »нтервал12 = new Guid("19bd6885-2450-d133-4fe3-54e88cd75b10");//05:30
		///<summary>
		///06:00
		///</summary>
		public static readonly Guid »нтервал13 = new Guid("05f26a98-2c1a-9c57-41ea-23d1dd747f65");//06:00
		///<summary>
		///06:30
		///</summary>
		public static readonly Guid »нтервал14 = new Guid("8b5294ad-50ba-e1c3-42d7-a95643548b4a");//06:30
		///<summary>
		///07:00
		///</summary>
		public static readonly Guid »нтервал15 = new Guid("4e3fd68f-7061-da47-4e5a-7d7cd5d63991");//07:00
		///<summary>
		///07:30
		///</summary>
		public static readonly Guid »нтервал16 = new Guid("18c07e86-ac92-be60-44a4-13b25782099f");//07:30
		///<summary>
		///08:00
		///</summary>
		public static readonly Guid »нтервал17 = new Guid("39e16aad-dc94-3882-4bc0-a74cc4d83aef");//08:00 
		///<summary>
		///08:30
		///</summary>
		public static readonly Guid »нтервал18 = new Guid("56479c82-75a7-2d32-4485-0ea3520300fb");//08:30
		///<summary>
		///09:00
		///</summary>
		public static readonly Guid »нтервал19 = new Guid("e039eb9b-168b-4db3-4ede-16e2b32b2a93");//09:00
		///<summary>
		///09:30
		///</summary>
		public static readonly Guid »нтервал20 = new Guid("ca178da2-0343-6a33-485a-ae9fb308f8f6");//09:30
		///<summary>
		///10:00
		///</summary>
		public static readonly Guid »нтервал21 = new Guid("81d616ae-dcab-435f-4fc5-4176736f2d2d");//10:00
		///<summary>
		///10:30
		///</summary>
		public static readonly Guid »нтервал22 = new Guid("6ace0192-4e3d-a206-4c90-dcceaebdc915");//10:30
		///<summary>
		///11:00
		///</summary>
		public static readonly Guid »нтервал23 = new Guid("54abab82-0530-36d8-4cc8-8a23ebfa7917");//11:00
		///<summary>
		///11:30
		///</summary>
		public static readonly Guid »нтервал24 = new Guid("574338b2-f954-fd57-42bd-658fc528b54e");//11:30
		///<summary>
		///12:00
		///</summary>
		public static readonly Guid »нтервал25 = new Guid("eee827b1-fadb-6494-42ca-f8a6946ac559");//12:00
		///<summary>
		///12:30
		///</summary>
		public static readonly Guid »нтервал26 = new Guid("1b0736a5-bd37-ccb5-4eb3-b5b7b25f884a");//12:30
		///<summary>
		///13:00
		///</summary>
		public static readonly Guid »нтервал27 = new Guid("7b1c1dbc-3a5b-91f0-4395-4bc2a0e3da00");//13:00
		///<summary>
		///13:30
		///</summary>
		public static readonly Guid »нтервал28 = new Guid("34fbb6bc-b4fc-e84b-4f1c-2fff247409e1");//13:30
		///<summary>
		///14:00
		///</summary>
		public static readonly Guid »нтервал29 = new Guid("5627ce86-c5ec-4ccc-453d-7ea7fbe49635");//14:00
		///<summary>
		///14:30
		///</summary>
		public static readonly Guid »нтервал30 = new Guid("e13b818a-fdfb-2adf-4572-b1cfc48eb875");//14:30
		///<summary>
		///15:00
		///</summary>
		public static readonly Guid »нтервал31 = new Guid("2de9f4a0-2d56-bdca-47f1-4080218d3d20");//15:00
		///<summary>
		///15:30
		///</summary>
		public static readonly Guid »нтервал32 = new Guid("60e67394-e7b9-bca6-40f9-a24fadce824a");//15:30
		///<summary>
		///16:00
		///</summary>
		public static readonly Guid »нтервал33 = new Guid("0d67a8b8-9987-2127-42b3-189f80a76a70");//16:00
		///<summary>
		///16:30
		///</summary>
		public static readonly Guid »нтервал34 = new Guid("65890cb6-e3ee-c947-43b6-9fefc362b14a");//16:30
		///<summary>
		///17:00
		///</summary>
		public static readonly Guid »нтервал35 = new Guid("9de552b6-a18d-abf9-4854-78705f95d6dd");//17:00
		///<summary>
		///17:30
		///</summary>
		public static readonly Guid »нтервал36 = new Guid("1bda35bf-a070-b854-4975-02d6eb76d9ea");//17:30
		///<summary>
		///18:00
		///</summary>
		public static readonly Guid »нтервал37 = new Guid("f49e55ae-7d0d-f860-4d02-1e0f2afb06a8");//18:00
		///<summary>
		///18:30
		///</summary>
		public static readonly Guid »нтервал38 = new Guid("c6b262a7-4d21-73fe-4fa5-e63f537ff2e1");//18:30
		///<summary>
		///19:00
		///</summary>
		public static readonly Guid »нтервал39 = new Guid("147928b0-1cf1-f253-4f3c-71a014246da4");//19:00
		///<summary>
		///19:30
		///</summary>
		public static readonly Guid »нтервал40 = new Guid("0054e4aa-c943-6387-4683-2de4c7e434f9");//19:30
		///<summary>
		///20:00
		///</summary>
		public static readonly Guid »нтервал41 = new Guid("24969099-5b24-b3e1-4d17-751a68ef501c");//20:00
		///<summary>
		///20:30
		///</summary>
		public static readonly Guid »нтервал42 = new Guid("69b50687-b6a0-f360-462e-ee0d054743e1");//20:30
		///<summary>
		///21:00
		///</summary>
		public static readonly Guid »нтервал43 = new Guid("919aaf84-b4cb-53fd-4c1e-0d3b0e060e3f");//21:00
		///<summary>
		///21:30
		///</summary>
		public static readonly Guid »нтервал44 = new Guid("52483a9b-11ad-a741-4819-8cebc291d0d1");//21:30
		///<summary>
		///22:00
		///</summary>
		public static readonly Guid »нтервал45 = new Guid("ce62108d-533b-45d2-4bf6-4866d8c25705");//22:00
		///<summary>
		///22:30
		///</summary>
		public static readonly Guid »нтервал46 = new Guid("989df2a0-dbea-2f48-4f7c-e92fc5e047c3");//22:30
		///<summary>
		///23:00
		///</summary>
		public static readonly Guid »нтервал47 = new Guid("1a06f8a4-33c2-28af-41b0-e25e36754baa");//23:00
		///<summary>
		///23:30
		///</summary>
		public static readonly Guid »нтервал48 = new Guid("e3553f81-e47e-7a99-45d3-e766bd7c1b0d");//23:30
		public static »нтервалы¬ремени ѕолучить(this »нтервалы¬ремени «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static »нтервалы¬ремени ѕолучить(this »нтервалы¬ремени «начение, Guid —сылка)
		{
			if(—сылка == »нтервал1)
			{
				return »нтервалы¬ремени.»нтервал1;
			}
			else if(—сылка == »нтервал2)
			{
				return »нтервалы¬ремени.»нтервал2;
			}
			else if(—сылка == »нтервал3)
			{
				return »нтервалы¬ремени.»нтервал3;
			}
			else if(—сылка == »нтервал4)
			{
				return »нтервалы¬ремени.»нтервал4;
			}
			else if(—сылка == »нтервал5)
			{
				return »нтервалы¬ремени.»нтервал5;
			}
			else if(—сылка == »нтервал6)
			{
				return »нтервалы¬ремени.»нтервал6;
			}
			else if(—сылка == »нтервал7)
			{
				return »нтервалы¬ремени.»нтервал7;
			}
			else if(—сылка == »нтервал8)
			{
				return »нтервалы¬ремени.»нтервал8;
			}
			else if(—сылка == »нтервал9)
			{
				return »нтервалы¬ремени.»нтервал9;
			}
			else if(—сылка == »нтервал10)
			{
				return »нтервалы¬ремени.»нтервал10;
			}
			else if(—сылка == »нтервал11)
			{
				return »нтервалы¬ремени.»нтервал11;
			}
			else if(—сылка == »нтервал12)
			{
				return »нтервалы¬ремени.»нтервал12;
			}
			else if(—сылка == »нтервал13)
			{
				return »нтервалы¬ремени.»нтервал13;
			}
			else if(—сылка == »нтервал14)
			{
				return »нтервалы¬ремени.»нтервал14;
			}
			else if(—сылка == »нтервал15)
			{
				return »нтервалы¬ремени.»нтервал15;
			}
			else if(—сылка == »нтервал16)
			{
				return »нтервалы¬ремени.»нтервал16;
			}
			else if(—сылка == »нтервал17)
			{
				return »нтервалы¬ремени.»нтервал17;
			}
			else if(—сылка == »нтервал18)
			{
				return »нтервалы¬ремени.»нтервал18;
			}
			else if(—сылка == »нтервал19)
			{
				return »нтервалы¬ремени.»нтервал19;
			}
			else if(—сылка == »нтервал20)
			{
				return »нтервалы¬ремени.»нтервал20;
			}
			else if(—сылка == »нтервал21)
			{
				return »нтервалы¬ремени.»нтервал21;
			}
			else if(—сылка == »нтервал22)
			{
				return »нтервалы¬ремени.»нтервал22;
			}
			else if(—сылка == »нтервал23)
			{
				return »нтервалы¬ремени.»нтервал23;
			}
			else if(—сылка == »нтервал24)
			{
				return »нтервалы¬ремени.»нтервал24;
			}
			else if(—сылка == »нтервал25)
			{
				return »нтервалы¬ремени.»нтервал25;
			}
			else if(—сылка == »нтервал26)
			{
				return »нтервалы¬ремени.»нтервал26;
			}
			else if(—сылка == »нтервал27)
			{
				return »нтервалы¬ремени.»нтервал27;
			}
			else if(—сылка == »нтервал28)
			{
				return »нтервалы¬ремени.»нтервал28;
			}
			else if(—сылка == »нтервал29)
			{
				return »нтервалы¬ремени.»нтервал29;
			}
			else if(—сылка == »нтервал30)
			{
				return »нтервалы¬ремени.»нтервал30;
			}
			else if(—сылка == »нтервал31)
			{
				return »нтервалы¬ремени.»нтервал31;
			}
			else if(—сылка == »нтервал32)
			{
				return »нтервалы¬ремени.»нтервал32;
			}
			else if(—сылка == »нтервал33)
			{
				return »нтервалы¬ремени.»нтервал33;
			}
			else if(—сылка == »нтервал34)
			{
				return »нтервалы¬ремени.»нтервал34;
			}
			else if(—сылка == »нтервал35)
			{
				return »нтервалы¬ремени.»нтервал35;
			}
			else if(—сылка == »нтервал36)
			{
				return »нтервалы¬ремени.»нтервал36;
			}
			else if(—сылка == »нтервал37)
			{
				return »нтервалы¬ремени.»нтервал37;
			}
			else if(—сылка == »нтервал38)
			{
				return »нтервалы¬ремени.»нтервал38;
			}
			else if(—сылка == »нтервал39)
			{
				return »нтервалы¬ремени.»нтервал39;
			}
			else if(—сылка == »нтервал40)
			{
				return »нтервалы¬ремени.»нтервал40;
			}
			else if(—сылка == »нтервал41)
			{
				return »нтервалы¬ремени.»нтервал41;
			}
			else if(—сылка == »нтервал42)
			{
				return »нтервалы¬ремени.»нтервал42;
			}
			else if(—сылка == »нтервал43)
			{
				return »нтервалы¬ремени.»нтервал43;
			}
			else if(—сылка == »нтервал44)
			{
				return »нтервалы¬ремени.»нтервал44;
			}
			else if(—сылка == »нтервал45)
			{
				return »нтервалы¬ремени.»нтервал45;
			}
			else if(—сылка == »нтервал46)
			{
				return »нтервалы¬ремени.»нтервал46;
			}
			else if(—сылка == »нтервал47)
			{
				return »нтервалы¬ремени.»нтервал47;
			}
			else if(—сылка == »нтервал48)
			{
				return »нтервалы¬ремени.»нтервал48;
			}
			return »нтервалы¬ремени.ѕуста€—сылка;
		}
		public static byte[]  люч(this »нтервалы¬ремени «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this »нтервалы¬ремени «начение)
		{
			switch («начение)
			{
				case »нтервалы¬ремени.»нтервал1: return »нтервал1;
				case »нтервалы¬ремени.»нтервал2: return »нтервал2;
				case »нтервалы¬ремени.»нтервал3: return »нтервал3;
				case »нтервалы¬ремени.»нтервал4: return »нтервал4;
				case »нтервалы¬ремени.»нтервал5: return »нтервал5;
				case »нтервалы¬ремени.»нтервал6: return »нтервал6;
				case »нтервалы¬ремени.»нтервал7: return »нтервал7;
				case »нтервалы¬ремени.»нтервал8: return »нтервал8;
				case »нтервалы¬ремени.»нтервал9: return »нтервал9;
				case »нтервалы¬ремени.»нтервал10: return »нтервал10;
				case »нтервалы¬ремени.»нтервал11: return »нтервал11;
				case »нтервалы¬ремени.»нтервал12: return »нтервал12;
				case »нтервалы¬ремени.»нтервал13: return »нтервал13;
				case »нтервалы¬ремени.»нтервал14: return »нтервал14;
				case »нтервалы¬ремени.»нтервал15: return »нтервал15;
				case »нтервалы¬ремени.»нтервал16: return »нтервал16;
				case »нтервалы¬ремени.»нтервал17: return »нтервал17;
				case »нтервалы¬ремени.»нтервал18: return »нтервал18;
				case »нтервалы¬ремени.»нтервал19: return »нтервал19;
				case »нтервалы¬ремени.»нтервал20: return »нтервал20;
				case »нтервалы¬ремени.»нтервал21: return »нтервал21;
				case »нтервалы¬ремени.»нтервал22: return »нтервал22;
				case »нтервалы¬ремени.»нтервал23: return »нтервал23;
				case »нтервалы¬ремени.»нтервал24: return »нтервал24;
				case »нтервалы¬ремени.»нтервал25: return »нтервал25;
				case »нтервалы¬ремени.»нтервал26: return »нтервал26;
				case »нтервалы¬ремени.»нтервал27: return »нтервал27;
				case »нтервалы¬ремени.»нтервал28: return »нтервал28;
				case »нтервалы¬ремени.»нтервал29: return »нтервал29;
				case »нтервалы¬ремени.»нтервал30: return »нтервал30;
				case »нтервалы¬ремени.»нтервал31: return »нтервал31;
				case »нтервалы¬ремени.»нтервал32: return »нтервал32;
				case »нтервалы¬ремени.»нтервал33: return »нтервал33;
				case »нтервалы¬ремени.»нтервал34: return »нтервал34;
				case »нтервалы¬ремени.»нтервал35: return »нтервал35;
				case »нтервалы¬ремени.»нтервал36: return »нтервал36;
				case »нтервалы¬ремени.»нтервал37: return »нтервал37;
				case »нтервалы¬ремени.»нтервал38: return »нтервал38;
				case »нтервалы¬ремени.»нтервал39: return »нтервал39;
				case »нтервалы¬ремени.»нтервал40: return »нтервал40;
				case »нтервалы¬ремени.»нтервал41: return »нтервал41;
				case »нтервалы¬ремени.»нтервал42: return »нтервал42;
				case »нтервалы¬ремени.»нтервал43: return »нтервал43;
				case »нтервалы¬ремени.»нтервал44: return »нтервал44;
				case »нтервалы¬ремени.»нтервал45: return »нтервал45;
				case »нтервалы¬ремени.»нтервал46: return »нтервал46;
				case »нтервалы¬ремени.»нтервал47: return »нтервал47;
				case »нтервалы¬ремени.»нтервал48: return »нтервал48;
			}
			return Guid.Empty;
		}
	}
}
