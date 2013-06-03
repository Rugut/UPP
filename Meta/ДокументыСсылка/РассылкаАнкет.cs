
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РассылкаАнкет:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b5490e25-4df6-46e8-8c50-958e9ff633c3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191824.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.ТиповыеАнкеты Анкета {get;set;}
		public object ЭлектронныйАдресОтветов {get;set;}//Электронный адрес ответов
		public bool СУведомлениемОПолучении {get;set;}//С уведомлением о получении
		public object УчетнаяЗаписьДляОтправки {get;set;}//Учетная запись для отправки
		public V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент {get;set;}//Электронный адрес ответов встроенный почтовый клиент
		public V82.ДокументыСсылка.РассылкаАнкет ПервичнаяРассылка {get;set;}//Первичная рассылка
		public string/*(0)*/ ТекстПисьма {get;set;}//Текст письма
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		
		public РассылкаАнкет()
		{
		}
		
		public РассылкаАнкет(byte[] УникальныйИдентификатор)
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
					,_Fld15230RRef [Анкета]
					,_Fld15231_TYPE [ЭлектронныйАдресОтветов_Тип],_Fld15231_RRRef [ЭлектронныйАдресОтветов],_Fld15231_RTRef [ЭлектронныйАдресОтветов_Вид]
					,_Fld15232 [СУведомлениемОПолучении]
					,_Fld15233_TYPE [УчетнаяЗаписьДляОтправки_Тип],_Fld15233_RRRef [УчетнаяЗаписьДляОтправки],_Fld15233_RTRef [УчетнаяЗаписьДляОтправки_Вид]
					,_Fld15234RRef [ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент]
					,_Fld15235RRef [ПервичнаяРассылка]
					,_Fld15236 [ТекстПисьма]
					,_Fld15237RRef [Ответственный]
					,_Fld15238 [Комментарий]
					From _Document549(NOLOCK)
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
							СУведомлениемОПолучении = ((byte[])Читалка.GetValue(8))[0]==1;
							ПервичнаяРассылка = new V82.ДокументыСсылка.РассылкаАнкет((byte[])Читалка.GetValue(13));
							ТекстПисьма = Читалка.GetString(14);
							Комментарий = Читалка.GetString(16);
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
		
		public V82.ДокументыОбъект.РассылкаАнкет  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РассылкаАнкет();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Анкета = Анкета;
			Объект.ЭлектронныйАдресОтветов = ЭлектронныйАдресОтветов;
			Объект.СУведомлениемОПолучении = СУведомлениемОПолучении;
			Объект.УчетнаяЗаписьДляОтправки = УчетнаяЗаписьДляОтправки;
			Объект.ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент = ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент;
			Объект.ПервичнаяРассылка = ПервичнаяРассылка;
			Объект.ТекстПисьма = ТекстПисьма;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РассылкаАнкет ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РассылкаАнкет)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РассылкаАнкет(УникальныйИдентификатор);
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