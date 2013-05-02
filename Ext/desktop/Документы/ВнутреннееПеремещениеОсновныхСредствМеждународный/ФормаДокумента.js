Ext.define('Документы.ВнутреннееПеремещениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:626px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутреннее перемещение основных средств (международный)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:349px;width:528px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:57px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:330px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:416px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:498px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:516px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:610px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:610px;height:220px;',
			height: 220,width: 610,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'220',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Местонахождение',
					width:'120',
					dataIndex:'МестонахождениеОбъекта',
					flex:1,
				},
				{
					text:'Местонахождение (нов.)',
					width:'120',
					dataIndex:'МестонахождениеОбъектаНов',
					flex:1,
				},
				{
					text:'МОЛ',
					width:'100',
					dataIndex:'МОЛ',
					flex:1,
				},
				{
					text:'МОЛ (нов.)',
					width:'100',
					dataIndex:'МОЛНов',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'96',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (нов.)',
					width:'92',
					dataIndex:'СчетЗатратНов',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 1 (новое)',
					width:'120',
					dataIndex:'Субконто1Нов',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 2 (новое)',
					width:'100',
					dataIndex:'Субконто2Нов',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 3 (новое)',
					width:'100',
					dataIndex:'Субконто3Нов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнутреннееПеремещениеОсновныхСредствМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'МестонахождениеОбъекта',
					},
					{
						name:'МестонахождениеОбъектаНов',
					},
					{
						name:'МОЛ',
					},
					{
						name:'МОЛНов',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНов',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто1Нов',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто2Нов',
					},
					{
						name:'Субконто3',
					},
					{
						name:'Субконто3Нов',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
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
			style: 'position:absolute;left:0px;top:376px;width:626px;height:25px;',
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
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:598px;top:33px;width:20px;height:19px;',
		},
	]
});