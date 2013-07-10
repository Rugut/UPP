
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
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class БанковскиеСчета:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9c660244-5259-4f3b-b8bf-e1ab83c0de32");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011927.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ) Номер расчетного счета
		///</summary>
		public string/*(20)*/ НомерСчета {get;set;}//Номер счета
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Банки Банк {get;set;}
		///<summary>
		///(Регл) Банк, в случае непрямых расчетов
		///</summary>
		public V82.СправочникиСсылка.Банки БанкДляРасчетов {get;set;}//Банк для расчетов
		///<summary>
		///(Регл) Текст "Плательщик\Получатель" в платежных документах
		///</summary>
		public string/*(0)*/ ТекстКорреспондента {get;set;}//Текст корреспондента
		///<summary>
		///(Общ) Текст назначения платежа
		///</summary>
		public string/*(0)*/ ТекстНазначения {get;set;}//Текст назначения
		///<summary>
		///(Общ) Расчетный, депозитный, ссудный, иной
		///</summary>
		public string/*(15)*/ ВидСчета {get;set;}//Вид счета
		///<summary>
		///(Общ) Валюта, в которой хранятся денежные средства
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДенежныхСредств {get;set;}//Валюта денежных средств
		///<summary>
		///(Регл) Номер и дата разрешения открытия счета
		///</summary>
		public string/*(30)*/ НомерИДатаРазрешения {get;set;}//Номер и дата разрешения
		///<summary>
		///(Общ) Дата открытия счета
		///</summary>
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		///<summary>
		///(Общ) Дата закрытия счета
		///</summary>
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		///<summary>
		///(Общ) Указывать в дате документа месяц прописью
		///</summary>
		public bool МесяцПрописью {get;set;}//Месяц прописью
		///<summary>
		///(Общ) Указывать сумму без копеек, если она в целых рублях
		///</summary>
		public bool СуммаБезКопеек {get;set;}//Сумма без копеек
		
		public БанковскиеСчета()
		{
		}
		
		public БанковскиеСчета(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public БанковскиеСчета(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
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
					,_Fld891 [НомерСчета]
					,_Fld892RRef [Банк]
					,_Fld893RRef [БанкДляРасчетов]
					,_Fld894 [ТекстКорреспондента]
					,_Fld895 [ТекстНазначения]
					,_Fld896 [ВидСчета]
					,_Fld897RRef [ВалютаДенежныхСредств]
					,_Fld898 [НомерИДатаРазрешения]
					,_Fld899 [ДатаОткрытия]
					,_Fld900 [ДатаЗакрытия]
					,_Fld901 [МесяцПрописью]
					,_Fld902 [СуммаБезКопеек]
					From _Reference7(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							НомерСчета = Читалка.GetString(6);
							Банк = new V82.СправочникиСсылка.Банки((byte[])Читалка.GetValue(7),Глубина+1);
							БанкДляРасчетов = new V82.СправочникиСсылка.Банки((byte[])Читалка.GetValue(8),Глубина+1);
							ТекстКорреспондента = Читалка.GetString(9);
							ТекстНазначения = Читалка.GetString(10);
							ВидСчета = Читалка.GetString(11);
							ВалютаДенежныхСредств = new V82.СправочникиСсылка.Валюты((byte[])Читалка.GetValue(12),Глубина+1);
							НомерИДатаРазрешения = Читалка.GetString(13);
							ДатаОткрытия = Читалка.GetDateTime(14);
							ДатаЗакрытия = Читалка.GetDateTime(15);
							МесяцПрописью = ((byte[])Читалка.GetValue(16))[0]==1;
							СуммаБезКопеек = ((byte[])Читалка.GetValue(17))[0]==1;
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
		
		public V82.СправочникиОбъект.БанковскиеСчета  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.БанковскиеСчета();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НомерСчета = НомерСчета;
			Объект.Банк = Банк;
			Объект.БанкДляРасчетов = БанкДляРасчетов;
			Объект.ТекстКорреспондента = ТекстКорреспондента;
			Объект.ТекстНазначения = ТекстНазначения;
			Объект.ВидСчета = ВидСчета;
			Объект.ВалютаДенежныхСредств = ВалютаДенежныхСредств;
			Объект.НомерИДатаРазрешения = НомерИДатаРазрешения;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
			Объект.МесяцПрописью = МесяцПрописью;
			Объект.СуммаБезКопеек = СуммаБезКопеек;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.БанковскиеСчета ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.БанковскиеСчета)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.БанковскиеСчета(УникальныйИдентификатор);
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