Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузке',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:363px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка представления наименования объекта при загрузке',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:310px;height:297px;',
			height: 297,width: 310,
			columns:
			[
				{
					text:'',
					width:'18',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя реквизита',
					width:'283',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'ИмяРеквизита',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:310px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:326px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});