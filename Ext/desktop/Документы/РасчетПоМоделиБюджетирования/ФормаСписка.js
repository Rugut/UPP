Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчеты по моделям бюджетирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата расчета',
					width:'80',
					dataIndex:'ДатаРасчета',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'120',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Пересчитывать регламентно',
					width:'49',
					dataIndex:'ПересчитыватьРегламентно',
					flex:1,
				},
				{
					text:'Основной источник данных',
					width:'91',
					dataIndex:'ИсточникДанныхДляРасчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПоМоделиБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ДатаРасчета',
					},
					{
						name:'Сценарий',
					},
					{
						name:'ПересчитыватьРегламентно',
					},
					{
						name:'ИсточникДанныхДляРасчета',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});