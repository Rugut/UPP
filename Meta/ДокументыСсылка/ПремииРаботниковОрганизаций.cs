
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
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПремииРаботниковОрганизаций:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8376180f-36f0-4914-b19d-c8a82b9a7fc8");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012007.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public object ВидРасчета {get;set;}//Вид расчета
		public decimal/*(2)*/ ЧислоМесяцев {get;set;}//Число месяцев
		public DateTime ДатаНачалаБП {get;set;}//Дата начала БП
		public DateTime ДатаОкончанияБП {get;set;}//Дата окончания БП
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.ДокументыСсылка.ПремииРаботниковОрганизаций ПерерассчитываемыйДокумент {get;set;}//Перерассчитываемый документ
		
		public ПремииРаботниковОрганизаций()
		{
		}
		
		public ПремииРаботниковОрганизаций(byte[] УникальныйИдентификатор)
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
					,_Fld9876 [ПериодРегистрации]
					,_Fld9877RRef [Организация]
					,_Fld9878 [Комментарий]
					,_Fld9879RRef [ВидРасчета]
					,_Fld9880 [ЧислоМесяцев]
					,_Fld9881 [ДатаНачалаБП]
					,_Fld9882 [ДатаОкончанияБП]
					,_Fld9883RRef [Ответственный]
					,_Fld9884 [КраткийСоставДокумента]
					,_Fld9885RRef [ПерерассчитываемыйДокумент]
					From _Document407(NOLOCK)
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
							ПериодРегистрации = Читалка.GetDateTime(4);
							Комментарий = Читалка.GetString(6);
							ЧислоМесяцев = Читалка.GetDecimal(8);
							ДатаНачалаБП = Читалка.GetDateTime(9);
							ДатаОкончанияБП = Читалка.GetDateTime(10);
							КраткийСоставДокумента = Читалка.GetString(12);
							ПерерассчитываемыйДокумент = new V82.ДокументыСсылка.ПремииРаботниковОрганизаций((byte[])Читалка.GetValue(13));
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
		
		public V82.ДокументыОбъект.ПремииРаботниковОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПремииРаботниковОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ПериодРегистрации = ПериодРегистрации;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.ВидРасчета = ВидРасчета;
			Объект.ЧислоМесяцев = ЧислоМесяцев;
			Объект.ДатаНачалаБП = ДатаНачалаБП;
			Объект.ДатаОкончанияБП = ДатаОкончанияБП;
			Объект.Ответственный = Ответственный;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ПерерассчитываемыйДокумент = ПерерассчитываемыйДокумент;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПремииРаботниковОрганизаций ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПремииРаботниковОрганизаций)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПремииРаботниковОрганизаций(УникальныйИдентификатор);
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