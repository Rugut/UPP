
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОплатаОтПокупателяПлатежнойКартой:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОплатаОтПокупателяПлатежнойКартой ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Контрагент, подотчетник, касса ККМ
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///Номер чека на фискальном регистраторе
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.ДоговорыЭквайринга ДоговорЭквайринга {get;set;}//Договор эквайринга
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Контрагенты Эквайрер {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорВзаиморасчетовЭквайрера {get;set;}//Договор взаиморасчетов эквайрера
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СчетУчетаРасчетовСЭквайрером {get;set;}//Счет учета расчетов с эквайрером
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ВидыОплатЧекаККМ ВидОплаты {get;set;}//Вид оплаты
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(5.2)*/ ПроцентТорговойУступки {get;set;}//Процент торговой уступки
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ СуммаТорговойУступки {get;set;}//Сумма торговой уступки
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document335(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6649RRef
						,_Fld6650RRef
						,_Fld6651RRef
						,_Fld6652RRef
						,_Fld6653
						,_Fld6654RRef
						,_Fld6655
						,_Fld6657
						,_Fld6658
						,_Fld6659
						,_Fld6660
						,_Fld6661RRef
						,_Fld6662RRef
						,_Fld6663RRef
						,_Fld6664RRef
						,_Fld6665RRef
						,_Fld6666RRef
						,_Fld6667
						,_Fld6668)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Подразделение
						,@ВидОперации
						,@Контрагент
						,@СуммаДокумента
						,@Ответственный
						,@Комментарий
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@НомерЧекаККМ
						,@ДоговорЭквайринга
						,@Эквайрер
						,@ДоговорВзаиморасчетовЭквайрера
						,@ВалютаДокумента
						,@СчетУчетаРасчетовСЭквайрером
						,@ВидОплаты
						,@ПроцентТорговойУступки
						,@СуммаТорговойУступки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document335
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6649RRef	= @Организация
						,_Fld6650RRef	= @Подразделение
						,_Fld6651RRef	= @ВидОперации
						,_Fld6652RRef	= @Контрагент
						,_Fld6653	= @СуммаДокумента
						,_Fld6654RRef	= @Ответственный
						,_Fld6655	= @Комментарий
						,_Fld6657	= @ОтражатьВУправленческомУчете
						,_Fld6658	= @ОтражатьВБухгалтерскомУчете
						,_Fld6659	= @ОтражатьВНалоговомУчете
						,_Fld6660	= @НомерЧекаККМ
						,_Fld6661RRef	= @ДоговорЭквайринга
						,_Fld6662RRef	= @Эквайрер
						,_Fld6663RRef	= @ДоговорВзаиморасчетовЭквайрера
						,_Fld6664RRef	= @ВалютаДокумента
						,_Fld6665RRef	= @СчетУчетаРасчетовСЭквайрером
						,_Fld6666RRef	= @ВидОплаты
						,_Fld6667	= @ПроцентТорговойУступки
						,_Fld6668	= @СуммаТорговойУступки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("НомерЧекаККМ", НомерЧекаККМ);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСЭквайрером", Guid.Empty);
					Команда.Parameters.AddWithValue("ПроцентТорговойУступки", ПроцентТорговойУступки);
					Команда.Parameters.AddWithValue("СуммаТорговойУступки", СуммаТорговойУступки);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document335
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}