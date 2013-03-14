Ext.define('Обработки.КлиентБанк.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Клиент банка (загрузка / выгрузка платежных документов)',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:7px;width:774px;height:565px;',
			height: 565,width: 774,
			items:
			[
				{
					title:'  Выгрузка  ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять отметку у всех',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Упорядочить по убыванию',
				},
				{
					text:'Упорядочить по возрастанию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'',
					width:'26',
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Ссылка',
					width:'95',
				},
				{
					text:'Дата',
					width:'70',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сумма документа',
					width:'98',
				},
				{
					text:'Контрагент',
					width:'119',
				},
				{
					text:'Счет контрагента',
					width:'135',
				},
				{
					text:'Назначение платежа',
					width:'120',
				},
				{
					text:'Вид операции',
					width:'98',
				},
				{
					text:'Вид документа',
					width:'108',
				},
				{
					text:'Замечание',
					width:'70',
				},
				{
					text:'Организация номер счета',
					width:'101',
				},
				{
					text:'Вид платежа',
					width:'101',
				},
				{
					text:'Очередность платежа',
					width:'100',
				},
				{
					text:'Текст плательщика',
					width:'100',
				},
				{
					text:'Текст получателя',
					width:'100',
				},
				{
					text:'ИНН плательщика',
					width:'100',
				},
				{
					text:'КПП плательщика',
					width:'100',
				},
				{
					text:'ИНН получателя',
					width:'100',
				},
				{
					text:'КПП получателя',
					width:'100',
				},
				{
					text:'Код БК',
					width:'100',
				},
				{
					text:'Код ОКАТО',
					width:'100',
				},
				{
					text:'Дата документа - основания перечисления  налога',
					width:'100',
				},
				{
					text:'Показатель номера',
					width:'100',
				},
				{
					text:'Показатель основания',
					width:'100',
				},
				{
					text:'Показатель типа',
					width:'100',
				},
				{
					text:'Показатель периода',
					width:'100',
				},
				{
					text:'Статус составителя',
					width:'100',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Организация кратко',
					width:'100',
				},
				{
					text:'Организация перечисление налога',
					width:'100',
				},
				{
					text:'Организация ИНН',
					width:'100',
				},
				{
					text:'Организация КПП',
					width:'100',
				},
				{
					text:'Организация счет',
					width:'100',
				},
				{
					text:'Сумма без копеек',
					width:'100',
				},
				{
					text:'Организация текст корреспондента',
					width:'100',
				},
				{
					text:'Организация текст назначения',
					width:'100',
				},
				{
					text:'Организация БИКБанка',
					width:'100',
				},
				{
					text:'Организация банк',
					width:'100',
				},
				{
					text:'Организация расч счет',
					width:'100',
				},
				{
					text:'Организация город банка',
					width:'100',
				},
				{
					text:'Организация банк для расчетов',
					width:'100',
				},
				{
					text:'Организация город РЦБанка',
					width:'100',
				},
				{
					text:'Организация БИКРЦБанка',
					width:'100',
				},
				{
					text:'Организация корр счет РЦБанка',
					width:'100',
				},
				{
					text:'Контрагент кратко',
					width:'100',
				},
				{
					text:'Контрагент ИНН',
					width:'100',
				},
				{
					text:'Контрагент КПП',
					width:'100',
				},
				{
					text:'Контрагент счет',
					width:'100',
				},
				{
					text:'Контрагент банк',
					width:'100',
				},
				{
					text:'Контрагент расч счет',
					width:'100',
				},
				{
					text:'Контрагент город банка',
					width:'100',
				},
				{
					text:'Контрагент банк для расчетов',
					width:'100',
				},
				{
					text:'Контрагент город РЦБанка',
					width:'100',
				},
				{
					text:'Контрагент БИКБанка',
					width:'100',
				},
				{
					text:'Контрагент БИКРЦБанка',
					width:'100',
				},
				{
					text:'Контрагент корр счет РЦБанка',
					width:'100',
				},
				{
					text:'Контрагент текст корреспондента',
					width:'100',
				},
				{
					text:'Контрагент текст назначения',
					width:'100',
				},
				{
					text:'Срок акцепта',
					width:'100',
				},
				{
					text:'Условие оплаты1',
					width:'100',
				},
				{
					text:'Дата отсылки док',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:200px;top:220px;width:380px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:87px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачПериода',
			style: 'position:absolute;left:113px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:222px;top:87px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонПериода',
			style: 'position:absolute;left:241px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Файл выгрузки:',
			style: 'position:absolute;left:8px;top:62px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлВыгрузки',
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:12px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетОрганизации',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:37px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыгрузить',
			text: 'Выгрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОВыгрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Укажите реквизиты для отбора выгружаемых документов. Снимите отметки с тех документов, которые не должны выгружаться. 
Проверьте, что все отмеченные документы введены корректно и готовы к выгрузке.
Выгрузите документы в файл. Для контроля результатов выгрузки сформируйте отчет.
',
			style: 'position:absolute;left:485px;top:12px;width:280px;height:97px;',
		},
					]
				},
				{
					title:'  Загрузка  ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять отметку у всех',
				},
				'-',
				{
					text:'Создать не найденное ...',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'',
					width:'26',
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата',
					width:'70',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сумма документа',
					width:'102',
				},
				{
					text:'Поступило',
					width:'80',
				},
				{
					text:'Списано',
					width:'80',
				},
				{
					text:'Счет организации',
					width:'129',
				},
				{
					text:'Контрагент',
					width:'132',
				},
				{
					text:'Счет контрагента',
					width:'116',
				},
				{
					text:'Вид операции',
					width:'84',
				},
				{
					text:'Договор',
					width:'84',
				},
				{
					text:'Назначение платежа',
					width:'84',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Операция',
					width:'100',
				},
				{
					text:'Замечание',
					width:'100',
				},
				{
					text:'Статья ДДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:187px;width:228px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлЗагрузки',
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПрочитатьДанныеИзФайла',
			text: 'Прочитать данные из файла',
			style: 'position:absolute;left:113px;top:87px;width:187px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация1',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:12px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетОрганизации1',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:37px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации1',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОЗагрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Прочитайте из файла данные о движениях по указанному банковскому счету. 
Проверьте, что все  документы получены корректно и готовы к загрузке.
Загрузите документы в информационную базу. Для контроля результатов загрузки сформируйте отчет.
',
			style: 'position:absolute;left:485px;top:12px;width:280px;height:97px;',
		},
					]
				},
			]
		},
	]
});