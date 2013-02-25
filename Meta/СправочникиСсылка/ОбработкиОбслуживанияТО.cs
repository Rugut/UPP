
using System;
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
	///Данный справочник содержит обработки обслуживания торгового оборудования.
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОбработкиОбслуживанияТО:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("05c02b8c-8ef4-47d6-897c-c5d7c6aee567");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191737.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Реквизит содержит описание обработки обслуживания.
		///</summary>
		public string/*(0)*/ Описание {get;set;}//Описание обработки обслуживания
		///<summary>
		///Вид торгового оборудования, обслуживаемый настоящей обработкой обслуживания.
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования Вид {get;set;}//Вид торгового оборудования
		///<summary>
		///Имя файла обработки обслуживания.
		///</summary>
		public string/*(256)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Обработка обслуживания торгового оборудования.
		///</summary>
		public ХранилищеЗначения Обработка {get;set;}//Обработка обслуживания
		///<summary>
		///Уникальный идентификатор обработки обслуживания.
		///</summary>
		public string/*(36)*/ Идентификатор {get;set;}
		///<summary>
		///Версия API механизма торгового, поддерживаемого обработкой обслуживания.
		///</summary>
		public decimal/*(10.2)*/ ВерсияAPI {get;set;}//Версия API
		
		public ОбработкиОбслуживанияТО()
		{
		}
		
		public ОбработкиОбслуживанияТО(byte[] УникальныйИдентификатор)
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
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)
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
							Описание = Читалка.GetString(6);
							Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							ИмяФайла = Читалка.GetString(8);
							Идентификатор = Читалка.GetString(10);
							ВерсияAPI = Читалка.GetDecimal(11);
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
		
		public V82.СправочникиОбъект.ОбработкиОбслуживанияТО  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ОбработкиОбслуживанияТО();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Описание = Описание;
			Объект.Вид = Вид;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Обработка = Обработка;
			Объект.Идентификатор = Идентификатор;
			Объект.ВерсияAPI = ВерсияAPI;
			return Объект;
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