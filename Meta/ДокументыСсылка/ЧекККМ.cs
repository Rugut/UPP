
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
	public partial class ЧекККМ:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("13dbeddc-bc26-44b9-9e58-ce22c562e271");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191742.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЧекККМ ВидОперации {get;set;}//Вид операции
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		public V82.СправочникиСсылка.КассыККМ КассаККМ {get;set;}//Касса ККМ
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.ДокументыСсылка.ЧекККМ ЧекККМПродажа {get;set;}//Чек ККМ (продажа)
		public bool ЧекПробитНаККМ {get;set;}//Чек пробит на ККМ
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		public decimal/*(4)*/ НомерСменыККМ {get;set;}//Номер смены ККМ
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Контрагенты ВладелецДисконтнойКарты {get;set;}//Владелец дисконтной карты
		
		public ЧекККМ()
		{
		}
		
		public ЧекККМ(byte[] УникальныйИдентификатор)
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
					,_Fld19170RRef [ВидОперации]
					,_Fld19171RRef [Склад]
					,_Fld19172RRef [КассаККМ]
					,_Fld19173RRef [ТипЦен]
					,_Fld19174 [СуммаДокумента]
					,_Fld19175 [Комментарий]
					,_Fld19176RRef [ЧекККМПродажа]
					,_Fld19177 [ЧекПробитНаККМ]
					,_Fld19178 [НомерЧекаККМ]
					,_Fld19179RRef [Ответственный]
					,_Fld19180RRef [ДисконтнаяКарта]
					,_Fld19181 [НомерСменыККМ]
					,_Fld19182RRef [УсловиеПродаж]
					,_Fld19183RRef [Организация]
					,_Fld19184RRef [ВладелецДисконтнойКарты]
					From _Document643(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийЧекККМ.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							СуммаДокумента = Читалка.GetDecimal(8);
							Комментарий = Читалка.GetString(9);
							ЧекККМПродажа = new V82.ДокументыСсылка.ЧекККМ((byte[])Читалка.GetValue(10));
							ЧекПробитНаККМ = ((byte[])Читалка.GetValue(11))[0]==1;
							НомерЧекаККМ = Читалка.GetDecimal(12);
							НомерСменыККМ = Читалка.GetDecimal(15);
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
		
		public V82.ДокументыОбъект.ЧекККМ  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЧекККМ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВидОперации = ВидОперации;
			Объект.Склад = Склад;
			Объект.КассаККМ = КассаККМ;
			Объект.ТипЦен = ТипЦен;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.Комментарий = Комментарий;
			Объект.ЧекККМПродажа = ЧекККМПродажа;
			Объект.ЧекПробитНаККМ = ЧекПробитНаККМ;
			Объект.НомерЧекаККМ = НомерЧекаККМ;
			Объект.Ответственный = Ответственный;
			Объект.ДисконтнаяКарта = ДисконтнаяКарта;
			Объект.НомерСменыККМ = НомерСменыККМ;
			Объект.УсловиеПродаж = УсловиеПродаж;
			Объект.Организация = Организация;
			Объект.ВладелецДисконтнойКарты = ВладелецДисконтнойКарты;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЧекККМ ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЧекККМ)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЧекККМ(УникальныйИдентификатор);
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