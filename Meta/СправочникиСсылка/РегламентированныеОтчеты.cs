
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
	[ProtoContract]
	[DataContract]
	public partial class РегламентированныеОтчеты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("14f10944-2eeb-4570-a546-254c9efbd477");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191628.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*6*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public string/*(255)*/ ИсточникОтчета {get;set;}//Источник отчета
		public bool НеПоказыватьВСписке {get;set;}//Не показывать в списке
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Описание {get;set;}
		public bool ВнешнийОтчетИспользовать {get;set;}//Использовать внешний отчет
		public ХранилищеЗначения ВнешнийОтчетХранилище {get;set;}//Хранилище с внешним отчетом
		public ХранилищеЗначения Периоды {get;set;}
		public string/*(32)*/ ВнешнийОтчетВерсия {get;set;}//Версия внешнего отчета
		
		public РегламентированныеОтчеты()
		{
		}
		
		public РегламентированныеОтчеты(byte[] УникальныйИдентификатор)
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
					,_Fld3373 [ИсточникОтчета]
					,_Fld3374 [НеПоказыватьВСписке]
					,_Fld3375 [Описание]
					,_Fld3376 [ВнешнийОтчетИспользовать]
					,_Fld3377 [ВнешнийОтчетХранилище]
					,_Fld3378 [Периоды]
					,_Fld3379 [ВнешнийОтчетВерсия]
					From _Reference220(NOLOCK)
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
							ИсточникОтчета = Читалка.GetString(6);
							НеПоказыватьВСписке = ((byte[])Читалка.GetValue(7))[0]==1;
							Описание = Читалка.GetString(8);
							ВнешнийОтчетИспользовать = ((byte[])Читалка.GetValue(9))[0]==1;
							ВнешнийОтчетВерсия = Читалка.GetString(12);
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
		
		public V82.СправочникиОбъект.РегламентированныеОтчеты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.РегламентированныеОтчеты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИсточникОтчета = ИсточникОтчета;
			Объект.НеПоказыватьВСписке = НеПоказыватьВСписке;
			Объект.Описание = Описание;
			Объект.ВнешнийОтчетИспользовать = ВнешнийОтчетИспользовать;
			Объект.ВнешнийОтчетХранилище = ВнешнийОтчетХранилище;
			Объект.Периоды = Периоды;
			Объект.ВнешнийОтчетВерсия = ВнешнийОтчетВерсия;
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