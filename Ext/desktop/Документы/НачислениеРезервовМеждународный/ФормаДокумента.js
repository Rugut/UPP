Ext.define('Документы.НачислениеРезервовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:569px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:148px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:553px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:553px;height:220px;',
			height: 220,width: 553,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид резерва',
					width:'120',
					dataIndex:'ВидРезерва',
					flex:1,
				},
				{
					text:'Счет отнесения расходов',
					width:'100',
					dataIndex:'СчетОтнесенияРасходов',
					flex:1,
				},
				{
					text:'Субконто 1...3',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'90',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Валютная сумма',
					width:'90',
					dataIndex:'ВалютнаяСумма',
					flex:1,
				},
				{
					text:'Сумма',
					width:'109',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеРезервовМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидРезерва',
					},
					{
						name:'СчетОтнесенияРасходов',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'Валюта',
					},
					{
						name:'ВалютнаяСумма',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:25px;',
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
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:569px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:357px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:357px;width:467px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:467px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:467px;height:19px;',
		},
	]
});