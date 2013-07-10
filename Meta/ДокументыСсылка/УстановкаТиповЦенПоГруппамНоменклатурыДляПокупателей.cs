
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("5bc2e79c-9b39-4823-8421-a116efa11f5a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012016.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ДатаНачала {get;set;}//Дата начала
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.Перечисления/*Ссылка*/.ВидыОперацийУстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей ВидОперации {get;set;}//Вид операции
		
		public УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей()
		{
		}
		
		public УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей(byte[] УникальныйИдентификатор)
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
					,_Fld12337 [ДатаНачала]
					,_Fld12338 [ДатаОкончания]
					,_Fld12339RRef [Контрагент]
					,_Fld12340 [Комментарий]
					,_Fld12341RRef [Ответственный]
					,_Fld12342RRef [ВидОперации]
					From _Document483(NOLOCK)
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
							ДатаНачала = Читалка.GetDateTime(4);
							ДатаОкончания = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(7);
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийУстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
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
		
		public V82.ДокументыОбъект.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.Контрагент = Контрагент;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ВидОперации = ВидОперации;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей(УникальныйИдентификатор);
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