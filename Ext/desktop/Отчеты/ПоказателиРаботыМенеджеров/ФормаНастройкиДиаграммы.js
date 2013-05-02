Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:342px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка диаграммы (Показатели работы менеджеров)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:356px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:340px;height:280px;',
			height: 280,width: 340,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя показателя',
					width:'320',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоказателиРаботыМенеджеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Представление',
					},
				]
			},
		},
	]
});