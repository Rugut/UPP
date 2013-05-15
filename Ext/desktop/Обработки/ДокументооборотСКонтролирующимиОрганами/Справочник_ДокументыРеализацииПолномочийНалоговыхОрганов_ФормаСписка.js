Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Документы реализации полномочий налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата документа',
					width:'94',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Номер документа',
					width:'104',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'237',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'134',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Организация',
					width:'168',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'Организация',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});