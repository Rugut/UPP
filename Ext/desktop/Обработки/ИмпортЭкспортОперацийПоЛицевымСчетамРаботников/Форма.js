Ext.define('Обработки.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	height: 482,width: 780,
	iconCls: 'bogus',
	title: 'Импорт / экспорт операций по лицевым счетам сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:780px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:766px;height:429px;',
			height: 429,width: 766,
			items:
			[
				{
					title:'ЭкспортЗаявок',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормированияФайлов',
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогЭкспорта',
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'Выгрузить',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Организация',
				},
				{
					text:'РасчетныйСчет',
				},
				{
					text:'НомерДоговора',
				},
				{
					text:'ВидВклада',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:97px;width:752px;height:24px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьИнтервал',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтделениеБанка',
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФилиалОтделенияБанка',
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСНачалаГода',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра1',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра1',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра2',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра2',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра3',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра3',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
					]
				},
				{
					title:'ЭкспортЗачислениеЗарплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговораЗачисленияЗарплаты',
			style: 'position:absolute;left:456px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормированияЗачислениеЗарплаты',
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогЭкспортаЗачислениеЗарплаты',
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:97px;width:752px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьИнтервал',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Обновить',
				},
				{
					text:'Печать',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'Выгрузить',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Сумма',
				},
				{
					text:'Организация',
				},
				{
					text:'СчетОрганизации',
				},
				{
					text:'РасчетныйСчет',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтделениеБанкаЗЗ',
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФилиалОтделенияБанкаЗЗ',
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСНачалаГодаЗЗ',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Импорт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИмпорта',
			style: 'position:absolute;left:103px;top:6px;width:655px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:48px;width:752px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Обновить',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЛицевыеСчетаСотрудников',
				},
				{
					text:'УстановитьИнтервал',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Загрузить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:752px;height:331px;',
			height: 331,width: 752,
			columns:
			[
				{
					text:'Загрузить',
				},
				{
					text:'Файл',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаОперации',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:408px;top:11px;width:193px;height:48px;',
			height: 48,width: 193,
			columns:
			[
				{
					text:'Загрузить',
				},
				{
					text:'Документ',
				},
				{
					text:'Операция',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ЛицевойСчет',
				},
				{
					text:'Сумма',
				},
				{
					text:'Результат',
				},
				{
					text:'Фамилия1',
				},
				{
					text:'Имя',
				},
				{
					text:'Отчетство',
				},
			]
		},
					]
				},
				{
					title:'ПротоколыОбмена',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:373px;',
			height: 373,width: 750,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Документ',
				},
				{
					text:'Дата',
				},
				{
					text:'Содержание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
			]
		},
					]
				},
			]
		},
	]
});