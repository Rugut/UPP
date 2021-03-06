﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВариантыАлгоритмовРасчета
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"64337380-11a3-4b1f-bb55-ed76233b770f\", \"Представление\":\"БольничныйСОбщимОграничением\"}")]
		БольничныйСОбщимОграничением = 0,//Больничный с общим ограничением
		[EnumMember(Value = "{\"Ссылка\":\"afd622c5-ef75-4458-aa7b-fa1f69f1663a\", \"Представление\":\"БольничныйСОграничениемВРазмереММОТ\"}")]
		БольничныйСОграничениемВРазмереММОТ = 1,//Больничный с ограничением в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"c49c4da9-f042-4ee3-aabe-21624cfec568\", \"Представление\":\"БольничныйСОграничениемВРазмереММОТбезРК\"}")]
		БольничныйСОграничениемВРазмереММОТбезРК = 2,//Больничный с ограничением в размере ММОТ без РК
		[EnumMember(Value = "{\"Ссылка\":\"3ff66066-eb6b-4938-b1a7-3ca05b74ae2b\", \"Представление\":\"БольничныйБезОграничений\"}")]
		БольничныйБезОграничений = 3,//Больничный без ограничений
		[EnumMember(Value = "{\"Ссылка\":\"7390abc8-c9bc-4ab6-b320-084a30f71c53\", \"Представление\":\"БольничныйПереходногоПериодаСОбщимОграничением\"}")]
		БольничныйПереходногоПериодаСОбщимОграничением = 4,//Больничный переходного периода с общим ограничением
		[EnumMember(Value = "{\"Ссылка\":\"9abe2b18-faac-486b-95b5-b3f374391231\", \"Представление\":\"БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ\"}")]
		БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ = 5,//Больничный переходного периода с общим ограничением ИВРазмере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"7f27c403-6571-4141-9e32-3f7bc04ab8a2\", \"Представление\":\"БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений\"}")]
		БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений = 6,//Больничный переходного периода с общим ограничением и без ограничений
		[EnumMember(Value = "{\"Ссылка\":\"236f45e9-ba3f-4acd-9c3a-c28622d2b3b8\", \"Представление\":\"БольничныйПереходногоПериодаБезОграничений\"}")]
		БольничныйПереходногоПериодаБезОграничений = 7,//Больничный переходного периода без ограничений
		[EnumMember(Value = "{\"Ссылка\":\"0a26d6e6-7738-4866-8b74-b07823fbc0c3\", \"Представление\":\"БольничныйПереходногоПериодаСОграничениемВРазмереММОТ\"}")]
		БольничныйПереходногоПериодаСОграничениемВРазмереММОТ = 8,//Больничный переходного периода с ограничением в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"10b83304-0be8-4d89-93fa-fe87e1bf1688\", \"Представление\":\"БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений\"}")]
		БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений = 9,//Больничный переходного периода с ограничением в размере ММОТи без ограничений
		[EnumMember(Value = "{\"Ссылка\":\"fe5b2796-db8c-4672-805f-730131edaf0f\", \"Представление\":\"БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим\"}")]
		БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим = 10,//Больничный переходного периода с ограничениями в размере ММОТи общим
		[EnumMember(Value = "{\"Ссылка\":\"81f432cf-fe5d-4e96-984c-b5e2ebfafce5\", \"Представление\":\"БольничныйСОграничениемПоБеременности\"}")]
		БольничныйСОграничениемПоБеременности = 11,//Больничный с ограничением по беременности
		[EnumMember(Value = "{\"Ссылка\":\"baa23bdf-be0c-4aba-8420-c7e86ca3bccb\", \"Представление\":\"ОтпускСОплатойПраздничныхДней\"}")]
		ОтпускСОплатойПраздничныхДней = 12,//Отпуск с оплатой праздничных дней
		[EnumMember(Value = "{\"Ссылка\":\"1d5bc6b4-ba8e-4623-8fa8-923c56b97611\", \"Представление\":\"БольничныйСОбщимОграничениемС2010года\"}")]
		БольничныйСОбщимОграничениемС2010года = 13,//Больничный с общим ограничением с 2010 года
		[EnumMember(Value = "{\"Ссылка\":\"6b833192-868c-4f44-93b9-6e8e35e1f796\", \"Представление\":\"БольничныйСОбщимОграничениемИВРазмереММОТС2010года\"}")]
		БольничныйСОбщимОграничениемИВРазмереММОТС2010года = 14,//Больничный с двумя ограничениями с 2010 года
		[EnumMember(Value = "{\"Ссылка\":\"db018d32-5b00-4ce5-ab04-bdca5053ae57\", \"Представление\":\"БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ\"}")]
		БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ = 15,//Больничный в 2011 году как в 2010 м с общим ограничением и в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"0314b05c-4785-4220-81d3-f8fc87753c4e\", \"Представление\":\"БольничныйВ2011годуКакВ2010мСОбщимОграничением\"}")]
		БольничныйВ2011годуКакВ2010мСОбщимОграничением = 16,//Больничный в 2011 году как в2010 м с общим ограничением
		[EnumMember(Value = "{\"Ссылка\":\"e4f2423d-d496-45f1-92dc-bbf38bcb80df\", \"Представление\":\"БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ\"}")]
		БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ = 17,//Больничный в 2011 году как в 2010 м с ограничением в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"b043b3f7-1949-462c-961e-61fcb0bef37f\", \"Представление\":\"БольничныйВ2011годуКакВ2010мБезОграничений\"}")]
		БольничныйВ2011годуКакВ2010мБезОграничений = 18,//Больничный в 2011 году как в 2010 м без ограничений
		[EnumMember(Value = "{\"Ссылка\":\"c28fa840-1825-4380-beee-d34aa5e94fa7\", \"Представление\":\"БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ\"}")]
		БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ = 19,//Больничный по беременности в 2013 году с общим ограничением и в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"9c605ebd-1dc4-4c11-ae4d-a43028fd1827\", \"Представление\":\"БольничныйПоБеременностиВ2013годуСОбщимОграничением\"}")]
		БольничныйПоБеременностиВ2013годуСОбщимОграничением = 20,//Больничный по беременности в 2013 году с общим ограничением
		[EnumMember(Value = "{\"Ссылка\":\"4973e1aa-233f-492d-9d6d-a32d9504f91e\", \"Представление\":\"БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ\"}")]
		БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ = 21,//Больничный по беременности в 2013 году с ограничением в размере ММОТ
		[EnumMember(Value = "{\"Ссылка\":\"cec1ee7d-0fc0-4ae7-a3c8-866f74b71051\", \"Представление\":\"БольничныйПоБеременностиВ2013годуБезОграничений\"}")]
		БольничныйПоБеременностиВ2013годуБезОграничений = 22,//Больничный по беременности в 2013 году без ограничений
	}
	public static partial class ВариантыАлгоритмовРасчета_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid БольничныйСОбщимОграничением = new Guid("76ed55bb-3b23-0f77-4b1f-11a364337380");//Больничный с общим ограничением
		public static readonly Guid БольничныйСОграничениемВРазмереММОТ = new Guid("1ffa7baa-f169-3a66-4458-ef75afd622c5");//Больничный с ограничением в размере ММОТ
		public static readonly Guid БольничныйСОграничениемВРазмереММОТбезРК = new Guid("6221beaa-fe4c-68c5-4ee3-f042c49c4da9");//Больничный с ограничением в размере ММОТ без РК
		public static readonly Guid БольничныйБезОграничений = new Guid("a03ca7b1-745b-2bae-4938-eb6b3ff66066");//Больничный без ограничений
		public static readonly Guid БольничныйПереходногоПериодаСОбщимОграничением = new Guid("4a0820b3-f730-531c-4ab6-c9bc7390abc8");//Больничный переходного периода с общим ограничением
		public static readonly Guid БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ = new Guid("f3b3b595-3974-3112-486b-faac9abe2b18");//Больничный переходного периода с общим ограничением ИВРазмере ММОТ
		public static readonly Guid БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений = new Guid("7b3f329e-4ac0-a2b8-4141-65717f27c403");//Больничный переходного периода с общим ограничением и без ограничений
		public static readonly Guid БольничныйПереходногоПериодаБезОграничений = new Guid("86c23a9c-d222-b8b3-4acd-ba3f236f45e9");//Больничный переходного периода без ограничений
		public static readonly Guid БольничныйПереходногоПериодаСОграничениемВРазмереММОТ = new Guid("78b0748b-fb23-c3c0-4866-77380a26d6e6");//Больничный переходного периода с ограничением в размере ММОТ
		public static readonly Guid БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений = new Guid("87fefa93-bfe1-8816-4d89-0be810b83304");//Больничный переходного периода с ограничением в размере ММОТи без ограничений
		public static readonly Guid БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим = new Guid("01735f80-ed31-0faf-4672-db8cfe5b2796");//Больничный переходного периода с ограничениями в размере ММОТи общим
		public static readonly Guid БольничныйСОграничениемПоБеременности = new Guid("e2b54c98-faeb-e5fc-4e96-fe5d81f432cf");//Больничный с ограничением по беременности
		public static readonly Guid ОтпускСОплатойПраздничныхДней = new Guid("e8c72084-a36c-cbbc-4aba-be0cbaa23bdf");//Отпуск с оплатой праздничных дней
		public static readonly Guid БольничныйСОбщимОграничениемС2010года = new Guid("3c92a88f-b956-1176-4623-ba8e1d5bc6b4");//Больничный с общим ограничением с 2010 года
		public static readonly Guid БольничныйСОбщимОграничениемИВРазмереММОТС2010года = new Guid("8e6eb993-e135-96f7-4f44-868c6b833192");//Больничный с двумя ограничениями с 2010 года
		public static readonly Guid БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ = new Guid("cabd04ab-5350-57ae-4ce5-5b00db018d32");//Больничный в 2011 году как в 2010 м с общим ограничением и в размере ММОТ
		public static readonly Guid БольничныйВ2011годуКакВ2010мСОбщимОграничением = new Guid("fcf8d381-7587-4e3c-4220-47850314b05c");//Больничный в 2011 году как в2010 м с общим ограничением
		public static readonly Guid БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ = new Guid("f3bbdc92-cb8b-df80-45f1-d496e4f2423d");//Больничный в 2011 году как в 2010 м с ограничением в размере ММОТ
		public static readonly Guid БольничныйВ2011годуКакВ2010мБезОграничений = new Guid("fc611e96-beb0-7ff3-462c-1949b043b3f7");//Больничный в 2011 году как в 2010 м без ограничений
		public static readonly Guid БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ = new Guid("4ad3eebe-e9a5-a74f-4380-1825c28fa840");//Больничный по беременности в 2013 году с общим ограничением и в размере ММОТ
		public static readonly Guid БольничныйПоБеременностиВ2013годуСОбщимОграничением = new Guid("30a44dae-fd28-2718-4c11-1dc49c605ebd");//Больничный по беременности в 2013 году с общим ограничением
		public static readonly Guid БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ = new Guid("2da36d9d-0495-1ef9-492d-233f4973e1aa");//Больничный по беременности в 2013 году с ограничением в размере ММОТ
		public static readonly Guid БольничныйПоБеременностиВ2013годуБезОграничений = new Guid("6f86c8a3-b774-5110-4ae7-0fc0cec1ee7d");//Больничный по беременности в 2013 году без ограничений
		public static ВариантыАлгоритмовРасчета Получить(this ВариантыАлгоритмовРасчета Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВариантыАлгоритмовРасчета Получить(this ВариантыАлгоритмовРасчета Значение, Guid Ссылка)
		{
			if(Ссылка == БольничныйСОбщимОграничением)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничением;
			}
			else if(Ссылка == БольничныйСОграничениемВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОграничениемВРазмереММОТ;
			}
			else if(Ссылка == БольничныйСОграничениемВРазмереММОТбезРК)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОграничениемВРазмереММОТбезРК;
			}
			else if(Ссылка == БольничныйБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйБезОграничений;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОбщимОграничением)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничением;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений;
			}
			else if(Ссылка == БольничныйПереходногоПериодаБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаБезОграничений;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОграничениемВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениемВРазмереММОТ;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений;
			}
			else if(Ссылка == БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим;
			}
			else if(Ссылка == БольничныйСОграничениемПоБеременности)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОграничениемПоБеременности;
			}
			else if(Ссылка == ОтпускСОплатойПраздничныхДней)
			{
				return ВариантыАлгоритмовРасчета.ОтпускСОплатойПраздничныхДней;
			}
			else if(Ссылка == БольничныйСОбщимОграничениемС2010года)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничениемС2010года;
			}
			else if(Ссылка == БольничныйСОбщимОграничениемИВРазмереММОТС2010года)
			{
				return ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничениемИВРазмереММОТС2010года;
			}
			else if(Ссылка == БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ;
			}
			else if(Ссылка == БольничныйВ2011годуКакВ2010мСОбщимОграничением)
			{
				return ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОбщимОграничением;
			}
			else if(Ссылка == БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ;
			}
			else if(Ссылка == БольничныйВ2011годуКакВ2010мБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мБезОграничений;
			}
			else if(Ссылка == БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ;
			}
			else if(Ссылка == БольничныйПоБеременностиВ2013годуСОбщимОграничением)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОбщимОграничением;
			}
			else if(Ссылка == БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ;
			}
			else if(Ссылка == БольничныйПоБеременностиВ2013годуБезОграничений)
			{
				return ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуБезОграничений;
			}
			return ВариантыАлгоритмовРасчета.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВариантыАлгоритмовРасчета Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВариантыАлгоритмовРасчета Значение)
		{
			switch (Значение)
			{
				case ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничением: return БольничныйСОбщимОграничением;
				case ВариантыАлгоритмовРасчета.БольничныйСОграничениемВРазмереММОТ: return БольничныйСОграничениемВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйСОграничениемВРазмереММОТбезРК: return БольничныйСОграничениемВРазмереММОТбезРК;
				case ВариантыАлгоритмовРасчета.БольничныйБезОграничений: return БольничныйБезОграничений;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничением: return БольничныйПереходногоПериодаСОбщимОграничением;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ: return БольничныйПереходногоПериодаСОбщимОграничениемИВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений: return БольничныйПереходногоПериодаСОбщимОграничениемИБезОграничений;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаБезОграничений: return БольничныйПереходногоПериодаБезОграничений;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениемВРазмереММОТ: return БольничныйПереходногоПериодаСОграничениемВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений: return БольничныйПереходногоПериодаСОграничениемВРазмереММОТиБезОграничений;
				case ВариантыАлгоритмовРасчета.БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим: return БольничныйПереходногоПериодаСОграничениямиВРазмереММОТиОбщим;
				case ВариантыАлгоритмовРасчета.БольничныйСОграничениемПоБеременности: return БольничныйСОграничениемПоБеременности;
				case ВариантыАлгоритмовРасчета.ОтпускСОплатойПраздничныхДней: return ОтпускСОплатойПраздничныхДней;
				case ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничениемС2010года: return БольничныйСОбщимОграничениемС2010года;
				case ВариантыАлгоритмовРасчета.БольничныйСОбщимОграничениемИВРазмереММОТС2010года: return БольничныйСОбщимОграничениемИВРазмереММОТС2010года;
				case ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ: return БольничныйВ2011годуКакВ2010мСОбщимОграничениемИВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОбщимОграничением: return БольничныйВ2011годуКакВ2010мСОбщимОграничением;
				case ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ: return БольничныйВ2011годуКакВ2010мСОграничениемВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйВ2011годуКакВ2010мБезОграничений: return БольничныйВ2011годуКакВ2010мБезОграничений;
				case ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ: return БольничныйПоБеременностиВ2013годуСОбщимОграничениемИВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОбщимОграничением: return БольничныйПоБеременностиВ2013годуСОбщимОграничением;
				case ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ: return БольничныйПоБеременностиВ2013годуСОграничениемВРазмереММОТ;
				case ВариантыАлгоритмовРасчета.БольничныйПоБеременностиВ2013годуБезОграничений: return БольничныйПоБеременностиВ2013годуБезОграничений;
			}
			return Guid.Empty;
		}
	}
}