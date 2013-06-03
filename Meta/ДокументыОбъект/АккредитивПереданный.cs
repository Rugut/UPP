
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
	public partial class АккредитивПереданный:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///Отзывный (непокрытый), Отзывный (покрытый), Безотзывный (непокрытый), Безотзывный (покрытый)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыАккредитивов ВидАккредитива {get;set;}//Вид аккредитива
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийСписаниеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) электронно, почтой, телеграфом
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(15)*/ ВидПлатежа {get;set;}//Вид платежа
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///Перечень документов, по которым производится платеж
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ ДокументыКПредъявлению {get;set;}//Документы к предъявлению
		///<summary>
		///Дополнительные условия по договору
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ ДополнительныеУсловия {get;set;}//Дополнительные условия
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(12)*/ ИННПлательщика {get;set;}//ИНН плательщика
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(12)*/ ИННПолучателя {get;set;}//ИНН получателя
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Получатель
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(9)*/ КПППлательщика {get;set;}//КПП плательщика
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(9)*/ КПППолучателя {get;set;}//КПП получателя
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///Срок действия аккредитива
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public DateTime СрокДействия {get;set;}//Срок действия
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоДт1 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СубконтоДт2 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СубконтоДт3 {get;set;}//Субконто Дт1
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///Счет депонирования в случае покрытого аккредитива
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public string/*(20)*/ СчетДепонента {get;set;}//Счет депонента
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Счет контрагента
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public string/*(0)*/ ТекстПлательщика {get;set;}//Текст плательщика
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public string/*(0)*/ ТекстПолучателя {get;set;}//Текст получателя
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public V82.Перечисления/*Ссылка*/.УсловияОплатыРасчетныхДокументов УсловиеОплаты {get;set;}//Условие оплаты
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public bool ЧастичнаяОплата {get;set;}//По документу происходит оплата частями
		[DataMember]
		[ProtoMember(45)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(46)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(47)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(48)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(49)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(50)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(51)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(52)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(53)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(54)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
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
						Insert Into _Document299(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4528RRef
						,_Fld4529RRef
						,_Fld4530RRef
						,_Fld4531
						,_Fld4532
						,_Fld4533RRef
						,_Fld4535
						,_Fld4536
						,_Fld4537
						,_Fld4538
						,_Fld4539
						,_Fld4540RRef
						,_Fld4541
						,_Fld4542
						,_Fld4543
						,_Fld4544
						,_Fld4545RRef
						,_Fld4546RRef
						,_Fld4547
						,_Fld4548
						,_Fld4549
						,_Fld4550
						,_Fld4551RRef
						,_Fld4552RRef
						,_Fld4553RRef
						,_Fld4554RRef
						,_Fld4555
						,_Fld4556
						,_Fld4557RRef
						,_Fld4558RRef
						,_Fld4559RRef
						,_Fld4560
						,_Fld4561
						,_Fld4562RRef
						,_Fld4563
						,_Fld4564
						,_Fld4565
						,_Fld4566
						,_Fld4567
						,_Fld4568
						,_Fld4569
						,_Fld4570
						,_Fld4571
						,_Fld4572
						,_Fld4573RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ВидАккредитива
						,@ВидОперации
						,@ВидПлатежа
						,@ДатаОплаты
						,@ДоговорКонтрагента
						,@ДокументыКПредъявлению
						,@ДополнительныеУсловия
						,@ИННПлательщика
						,@ИННПолучателя
						,@Комментарий
						,@Контрагент
						,@КПППлательщика
						,@КПППолучателя
						,@НазначениеПлатежа
						,@Оплачено
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтраженоВОперУчете
						,@СрокДействия
						,@СтатьяДвиженияДенежныхСредств
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@СуммаДокумента
						,@СчетДепонента
						,@СчетКонтрагента
						,@СчетОрганизации
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТекстПлательщика
						,@ТекстПолучателя
						,@УсловиеОплаты
						,@ЧастичнаяОплата
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@Подразделение)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document299
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4528RRef	= @ВалютаДокумента
						,_Fld4529RRef	= @ВидАккредитива
						,_Fld4530RRef	= @ВидОперации
						,_Fld4531	= @ВидПлатежа
						,_Fld4532	= @ДатаОплаты
						,_Fld4533RRef	= @ДоговорКонтрагента
						,_Fld4535	= @ДокументыКПредъявлению
						,_Fld4536	= @ДополнительныеУсловия
						,_Fld4537	= @ИННПлательщика
						,_Fld4538	= @ИННПолучателя
						,_Fld4539	= @Комментарий
						,_Fld4540RRef	= @Контрагент
						,_Fld4541	= @КПППлательщика
						,_Fld4542	= @КПППолучателя
						,_Fld4543	= @НазначениеПлатежа
						,_Fld4544	= @Оплачено
						,_Fld4545RRef	= @Организация
						,_Fld4546RRef	= @Ответственный
						,_Fld4547	= @ОтражатьВБухгалтерскомУчете
						,_Fld4548	= @ОтражатьВНалоговомУчете
						,_Fld4549	= @ОтраженоВОперУчете
						,_Fld4550	= @СрокДействия
						,_Fld4551RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld4552RRef	= @СубконтоДт1
						,_Fld4553RRef	= @СубконтоДт2
						,_Fld4554RRef	= @СубконтоДт3
						,_Fld4555	= @СуммаДокумента
						,_Fld4556	= @СчетДепонента
						,_Fld4557RRef	= @СчетКонтрагента
						,_Fld4558RRef	= @СчетОрганизации
						,_Fld4559RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld4560	= @ТекстПлательщика
						,_Fld4561	= @ТекстПолучателя
						,_Fld4562RRef	= @УсловиеОплаты
						,_Fld4563	= @ЧастичнаяОплата
						,_Fld4564	= @Содержание_УСН
						,_Fld4565	= @Графа4_УСН
						,_Fld4566	= @Графа5_УСН
						,_Fld4567	= @Графа6_УСН
						,_Fld4568	= @Графа7_УСН
						,_Fld4569	= @ДоходыЕНВД_УСН
						,_Fld4570	= @РасходыЕНВД_УСН
						,_Fld4571	= @НДС_УСН
						,_Fld4572	= @РучнаяНастройка_УСН
						,_Fld4573RRef	= @Подразделение
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидАккредитива", ВидАккредитива.Ключ());
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ВидПлатежа", ВидПлатежа);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ДокументыКПредъявлению", ДокументыКПредъявлению);
					Команда.Parameters.AddWithValue("ДополнительныеУсловия", ДополнительныеУсловия);
					Команда.Parameters.AddWithValue("ИННПлательщика", ИННПлательщика);
					Команда.Parameters.AddWithValue("ИННПолучателя", ИННПолучателя);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КПППлательщика", КПППлательщика);
					Команда.Parameters.AddWithValue("КПППолучателя", КПППолучателя);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("СрокДействия", СрокДействия);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетДепонента", СчетДепонента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("ТекстПлательщика", ТекстПлательщика);
					Команда.Parameters.AddWithValue("ТекстПолучателя", ТекстПолучателя);
					Команда.Parameters.AddWithValue("УсловиеОплаты", УсловиеОплаты.Ключ());
					Команда.Parameters.AddWithValue("ЧастичнаяОплата", ЧастичнаяОплата);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
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
					Команда.CommandText = @"Delete _Document299
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}