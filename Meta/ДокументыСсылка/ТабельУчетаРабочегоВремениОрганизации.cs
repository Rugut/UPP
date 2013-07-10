
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
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ТабельУчетаРабочегоВремениОрганизации:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8b1bd005-70e3-4493-9e16-7024fbc48e10");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011932.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.Перечисления/*Ссылка*/.СпособыВводаДанныхОВремени СпособВводаДанных {get;set;}//Способ ввода данных
		public V82.Перечисления/*Ссылка*/.ПериодНачисленияЗарплаты СпособУказанияПериода {get;set;}//Способ указания периода
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		
		public ТабельУчетаРабочегоВремениОрганизации()
		{
		}
		
		public ТабельУчетаРабочегоВремениОрганизации(byte[] УникальныйИдентификатор)
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
					,_Number [Номер]
					,_Fld20206RRef [Организация]
					,_Fld20207 [ПериодРегистрации]
					,_Fld20208RRef [ПодразделениеОрганизации]
					,_Fld20209RRef [Ответственный]
					,_Fld20210 [Комментарий]
					,_Fld20211 [КраткийСоставДокумента]
					,_Fld20212RRef [СпособВводаДанных]
					,_Fld20213RRef [СпособУказанияПериода]
					,_Fld20214 [ДатаНачалаПериода]
					,_Fld20215 [ДатаОкончанияПериода]
					From _Document19664(NOLOCK)
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
							Номер = Читалка.GetString(3);
							ПериодРегистрации = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(8);
							КраткийСоставДокумента = Читалка.GetString(9);
							СпособВводаДанных = V82.Перечисления/*Ссылка*/.СпособыВводаДанныхОВремени.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							СпособУказанияПериода = V82.Перечисления/*Ссылка*/.ПериодНачисленияЗарплаты.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							ДатаНачалаПериода = Читалка.GetDateTime(12);
							ДатаОкончанияПериода = Читалка.GetDateTime(13);
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
		
		public V82.ДокументыОбъект.ТабельУчетаРабочегоВремениОрганизации  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ТабельУчетаРабочегоВремениОрганизации();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.ПериодРегистрации = ПериодРегистрации;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.СпособВводаДанных = СпособВводаДанных;
			Объект.СпособУказанияПериода = СпособУказанияПериода;
			Объект.ДатаНачалаПериода = ДатаНачалаПериода;
			Объект.ДатаОкончанияПериода = ДатаОкончанияПериода;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ТабельУчетаРабочегоВремениОрганизации ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ТабельУчетаРабочегоВремениОрганизации)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ТабельУчетаРабочегоВремениОрганизации(УникальныйИдентификатор);
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