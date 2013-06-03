
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
	public partial class КорректировкаДолгаПоВозвратнойТаре:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("7d61bfad-5803-4da5-b24d-aebc5cad1569");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191047.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийКорректировкаДолгаПоВозвратнойТаре ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Основание (статья) списания
		///</summary>
		public string/*(0)*/ Основание {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public КорректировкаДолгаПоВозвратнойТаре()
		{
		}
		
		public КорректировкаДолгаПоВозвратнойТаре(byte[] УникальныйИдентификатор)
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
					,_Fld8872RRef [ВалютаДокумента]
					,_Fld8873RRef [ВидОперации]
					,_Fld8874RRef [ДоговорКонтрагента]
					,_Fld8875 [Комментарий]
					,_Fld8876RRef [Контрагент]
					,_Fld8877 [КурсВзаиморасчетов]
					,_Fld8878 [КурсДокумента]
					,_Fld8879RRef [Организация]
					,_Fld8880 [Основание]
					,_Fld8881RRef [Подразделение]
					,_Fld8882_TYPE [Сделка_Тип],_Fld8882_RRRef [Сделка],_Fld8882_RTRef [Сделка_Вид]
					,_Fld8883 [СуммаДокумента]
					,_Fld8884 [КратностьДокумента]
					,_Fld8885 [КратностьВзаиморасчетов]
					,_Fld8886RRef [Ответственный]
					From _Document420(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийКорректировкаДолгаПоВозвратнойТаре.ПустаяСсылка.Получить((byte[])Читалка.GetValue(5));
							Комментарий = Читалка.GetString(7);
							КурсВзаиморасчетов = Читалка.GetDecimal(9);
							КурсДокумента = Читалка.GetDecimal(10);
							Основание = Читалка.GetString(12);
							СуммаДокумента = Читалка.GetDecimal(17);
							КратностьДокумента = Читалка.GetDecimal(18);
							КратностьВзаиморасчетов = Читалка.GetDecimal(19);
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
		
		public V82.ДокументыОбъект.КорректировкаДолгаПоВозвратнойТаре  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.КорректировкаДолгаПоВозвратнойТаре();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ВидОперации = ВидОперации;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Комментарий = Комментарий;
			Объект.Контрагент = Контрагент;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.КурсДокумента = КурсДокумента;
			Объект.Организация = Организация;
			Объект.Основание = Основание;
			Объект.Подразделение = Подразделение;
			Объект.Сделка = Сделка;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.КратностьДокумента = КратностьДокумента;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.КорректировкаДолгаПоВозвратнойТаре ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.КорректировкаДолгаПоВозвратнойТаре)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.КорректировкаДолгаПоВозвратнойТаре(УникальныйИдентификатор);
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