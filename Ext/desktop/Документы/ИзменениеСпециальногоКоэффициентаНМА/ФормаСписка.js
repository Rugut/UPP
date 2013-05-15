Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:622px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:606px;height:380px;',
			height: 380,width: 606,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'НУ',
					width:'20',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Дата',
					width:'123',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'89',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Проведен',
					width:'0',
					dataIndex:'Проведен',
					flex:1,
				},
				{
					text:'Организация',
					width:'201',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеСпециальногоКоэффициентаНМА/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Проведен',
					},
					{
						name:'Организация',
					},
					{
						name:'Ответственный',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:622px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});