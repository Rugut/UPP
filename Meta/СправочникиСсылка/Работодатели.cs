
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class Работодатели:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b7dc3eaf-8733-49d6-8feb-5065132b502f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191646.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		public string/*(12)*/ ИНН {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПП {get;set;}
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		
		public Работодатели()
		{
		}
		
		public Работодатели(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld3314 [НаименованиеПолное]
					,_Fld3315 [ИНН]
					,_Fld3316 [КПП]
					,_Fld3317 [НаименованиеТерриториальногоОрганаФСС]
					,_Fld3318 [РегистрационныйНомерФСС]
					,_Fld3319 [ДополнительныйКодФСС]
					,_Fld3320 [КодПодчиненностиФСС]
					From _Reference212(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							НаименованиеПолное = Читалка.GetString(6);
							ИНН = Читалка.GetString(7);
							КПП = Читалка.GetString(8);
							НаименованиеТерриториальногоОрганаФСС = Читалка.GetString(9);
							РегистрационныйНомерФСС = Читалка.GetString(10);
							ДополнительныйКодФСС = Читалка.GetString(11);
							КодПодчиненностиФСС = Читалка.GetString(12);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.СправочникиОбъект.Работодатели  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Работодатели();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НаименованиеПолное = НаименованиеПолное;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.НаименованиеТерриториальногоОрганаФСС = НаименованиеТерриториальногоОрганаФСС;
			Объект.РегистрационныйНомерФСС = РегистрационныйНомерФСС;
			Объект.ДополнительныйКодФСС = ДополнительныйКодФСС;
			Объект.КодПодчиненностиФСС = КодПодчиненностиФСС;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.Работодатели ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.Работодатели)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.Работодатели(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}