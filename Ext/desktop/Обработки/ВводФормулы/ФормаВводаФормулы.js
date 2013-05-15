Ext.define('Обработки.ВводФормулы.ФормаВводаФормулы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:479px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод формулы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:92px;width:463px;height:51px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:185px;width:463px;height:85px;',
			height: 85,width: 463,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Вид параметра',
					width:'176',
					dataIndex:'ВидПараметра',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводФормулы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'ВидПараметра',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Параметры выпуска продукции',
			style: 'position:absolute;left:8px;top:145px;width:463px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:161px;width:463px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'fieldset',
			title: 'Свойства характеристики номенклатуры',
			style: 'position:absolute;left:8px;top:276px;width:463px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:316px;width:463px;height:101px;',
			height: 101,width: 463,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводФормулы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:292px;width:463px;height:24px;',
			items:
			[
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:479px;height:25px;',
			dock: 'bottom',
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
	]
});