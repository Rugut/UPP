Ext.define('Отчеты.РапортРуководителю.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:448px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка показателей',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:434px;height:379px;',
			height: 379,width: 434,
			items:
			[
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:420px;height:24px;',
			items:
			[
				{
					text:'Параметры',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Из списка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:420px;height:244px;',
			height: 244,width: 420,
			columns:
			[
				{
					text:'Показатель',
					width:'257',
				},
				{
					text:'Показатель',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТекДата',
			style: 'position:absolute;left:94px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать в файл:',
			style: 'position:absolute;left:12px;top:168px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Текущая дата:',
			style: 'position:absolute;left:12px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вид отчета:',
			style: 'position:absolute;left:243px;top:99px;width:61px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:99px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКаталог',
			style: 'position:absolute;left:150px;top:168px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать по почте:',
			style: 'position:absolute;left:12px;top:192px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаАдресаЭлПочты',
			style: 'position:absolute;left:150px;top:192px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автообновление:',
			style: 'position:absolute;left:12px;top:99px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИнтервалАвтообновления',
			style: 'position:absolute;left:122px;top:99px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать выходные',
			style: 'position:absolute;left:297px;top:50px;width:129px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дней до текущей даты:',
			style: 'position:absolute;left:184px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата формирования:',
			style: 'position:absolute;left:12px;top:50px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтчета',
			text: '',
			style: 'position:absolute;left:126px;top:50px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'минут',
			style: 'position:absolute;left:184px;top:99px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Время автопубликаций:',
			style: 'position:absolute;left:12px;top:248px;width:136px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:272px;width:276px;height:80px;',
			height: 80,width: 276,
			columns:
			[
				{
					text:'Время',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:150px;top:248px;width:276px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать при старте системы',
			style: 'position:absolute;left:12px;top:123px;width:204px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Отправлять с:',
			style: 'position:absolute;left:12px;top:216px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыУчетнойЗаписи',
			style: 'position:absolute;left:150px;top:216px;width:276px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:448px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
			]
		},
	]
});