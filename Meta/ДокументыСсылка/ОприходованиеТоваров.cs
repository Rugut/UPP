
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
	public partial class ОприходованиеТоваров:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("01444f4c-39fd-410c-af83-016b24724e87");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191539.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ) Основание (статья) оприходования
		///</summary>
		public string/*(0)*/ Основание {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.ДокументыСсылка.ИнвентаризацияТоваровНаСкладе ИнвентаризацияТоваровНаСкладе {get;set;}//Инвентаризация товаров на складе
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Регл.) Сумма в валюте регламентированного учета, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокументаРегл {get;set;}//Сумма документа (регл.)
		///<summary>
		///(Регл)
		///</summary>
		public object КоррСчет {get;set;}//Корр. счет
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто1 {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		public object КоррСчетНУ {get;set;}//Корр. счет (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ1 {get;set;}//Субконто 1 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ2 {get;set;}//Субконто 2 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ3 {get;set;}//Субконто 3 (НУ)
		///<summary>
		///(Общ)
		///</summary>
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОприходованиеТоваров ВидОперации {get;set;}//Вид операции
		
		public ОприходованиеТоваров()
		{
		}
		
		public ОприходованиеТоваров(byte[] УникальныйИдентификатор)
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
					,_Fld10881RRef [Организация]
					,_Fld10882RRef [Подразделение]
					,_Fld10883RRef [Склад]
					,_Fld10884 [ОтражатьВУправленческомУчете]
					,_Fld10885 [ОтражатьВБухгалтерскомУчете]
					,_Fld10886 [ОтражатьВНалоговомУчете]
					,_Fld10887RRef [ТипЦен]
					,_Fld10888 [СуммаДокумента]
					,_Fld10889 [Основание]
					,_Fld10890 [Комментарий]
					,_Fld10891RRef [ИнвентаризацияТоваровНаСкладе]
					,_Fld10892RRef [Ответственный]
					,_Fld10893 [СуммаДокументаРегл]
					,_Fld10894RRef [КоррСчет]
					,_Fld10895RRef [Субконто1]
					,_Fld10896RRef [Субконто2]
					,_Fld10897RRef [Субконто3]
					,_Fld10898RRef [КоррСчетНУ]
					,_Fld10899RRef [СубконтоНУ1]
					,_Fld10900RRef [СубконтоНУ2]
					,_Fld10901RRef [СубконтоНУ3]
					,_Fld10902 [УчитыватьНДС]
					,_Fld10903RRef [ВидОперации]
					From _Document463(NOLOCK)
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
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(7))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							СуммаДокумента = Читалка.GetDecimal(11);
							Основание = Читалка.GetString(12);
							Комментарий = Читалка.GetString(13);
							ИнвентаризацияТоваровНаСкладе = new V82.ДокументыСсылка.ИнвентаризацияТоваровНаСкладе((byte[])Читалка.GetValue(14));
							СуммаДокументаРегл = Читалка.GetDecimal(16);
							УчитыватьНДС = ((byte[])Читалка.GetValue(25))[0]==1;
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийОприходованиеТоваров.ПустаяСсылка.Получить((byte[])Читалка.GetValue(26));
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
		
		public V82.ДокументыОбъект.ОприходованиеТоваров  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ОприходованиеТоваров();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Подразделение = Подразделение;
			Объект.Склад = Склад;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ТипЦен = ТипЦен;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.Основание = Основание;
			Объект.Комментарий = Комментарий;
			Объект.ИнвентаризацияТоваровНаСкладе = ИнвентаризацияТоваровНаСкладе;
			Объект.Ответственный = Ответственный;
			Объект.СуммаДокументаРегл = СуммаДокументаРегл;
			Объект.КоррСчет = КоррСчет;
			Объект.Субконто1 = Субконто1;
			Объект.Субконто2 = Субконто2;
			Объект.Субконто3 = Субконто3;
			Объект.КоррСчетНУ = КоррСчетНУ;
			Объект.СубконтоНУ1 = СубконтоНУ1;
			Объект.СубконтоНУ2 = СубконтоНУ2;
			Объект.СубконтоНУ3 = СубконтоНУ3;
			Объект.УчитыватьНДС = УчитыватьНДС;
			Объект.ВидОперации = ВидОперации;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ОприходованиеТоваров ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ОприходованиеТоваров)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ОприходованиеТоваров(УникальныйИдентификатор);
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