
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
	public partial class ПеречислениеНДФЛвБюджет:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("93601fd1-e0b9-4680-a83f-dc0e22fe1aa4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011945.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public DateTime ДатаПлатежа {get;set;}//Дата платежа
		public DateTime МесяцНалоговогоПериода {get;set;}//Месяц налогового периода
		public decimal/*(15.2)*/ Сумма {get;set;}
		public string/*(30)*/ ПлатежноеПоручениеНомер {get;set;}//Номер платежного поручения
		public DateTime ПлатежноеПоручениеДата {get;set;}//Дата платежного поручения
		public V82.Перечисления/*Ссылка*/.НДФЛСтавки Ставка {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public string/*(21)*/ ОКАТО_КПП {get;set;}//ОКАТО/КПП
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		
		public ПеречислениеНДФЛвБюджет()
		{
		}
		
		public ПеречислениеНДФЛвБюджет(byte[] УникальныйИдентификатор)
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
					,_Fld24752RRef [Организация]
					,_Fld24753 [Комментарий]
					,_Fld24754RRef [Ответственный]
					,_Fld24755 [ДатаПлатежа]
					,_Fld24756 [МесяцНалоговогоПериода]
					,_Fld24757 [Сумма]
					,_Fld24758 [ПлатежноеПоручениеНомер]
					,_Fld24759 [ПлатежноеПоручениеДата]
					,_Fld24760RRef [Ставка]
					,_Fld24761 [ОКАТО_КПП]
					,_Fld24762 [КраткийСоставДокумента]
					From _Document23160(NOLOCK)
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
							Комментарий = Читалка.GetString(5);
							ДатаПлатежа = Читалка.GetDateTime(7);
							МесяцНалоговогоПериода = Читалка.GetDateTime(8);
							Сумма = Читалка.GetDecimal(9);
							ПлатежноеПоручениеНомер = Читалка.GetString(10);
							ПлатежноеПоручениеДата = Читалка.GetDateTime(11);
							Ставка = V82.Перечисления/*Ссылка*/.НДФЛСтавки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							ОКАТО_КПП = Читалка.GetString(13);
							КраткийСоставДокумента = Читалка.GetString(14);
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
		
		public V82.ДокументыОбъект.ПеречислениеНДФЛвБюджет  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПеречислениеНДФЛвБюджет();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ДатаПлатежа = ДатаПлатежа;
			Объект.МесяцНалоговогоПериода = МесяцНалоговогоПериода;
			Объект.Сумма = Сумма;
			Объект.ПлатежноеПоручениеНомер = ПлатежноеПоручениеНомер;
			Объект.ПлатежноеПоручениеДата = ПлатежноеПоручениеДата;
			Объект.Ставка = Ставка;
			Объект.ОКАТО_КПП = ОКАТО_КПП;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПеречислениеНДФЛвБюджет ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПеречислениеНДФЛвБюджет)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПеречислениеНДФЛвБюджет(УникальныйИдентификатор);
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