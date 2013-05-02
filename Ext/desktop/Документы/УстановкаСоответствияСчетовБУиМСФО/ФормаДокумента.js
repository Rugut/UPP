Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка соответствия счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:740px;height:25px;',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:131px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:151px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:345px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:345px;width:636px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:370px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:636px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:724px;height:283px;',
			height: 283,width: 724,
			items:
			[
				{
					title:'Соответствия счетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Учитывается',
					flex:1,
				},
				{
					text:'Счет хозрасчетный',
					width:'74',
					dataIndex:'СчетХозрасчетный',
					flex:1,
				},
				{
					text:'Вид движения',
					width:'107',
					dataIndex:'ВидДвижения',
					flex:1,
				},
				{
					text:'Субконто хозр.',
					width:'182',
					dataIndex:'СубконтоХозр1',
					flex:1,
				},
				{
					text:'',
					width:'182',
					dataIndex:'СубконтоХозр2',
					flex:1,
				},
				{
					text:'',
					width:'182',
					dataIndex:'СубконтоХозр3',
					flex:1,
				},
				{
					text:'Счет международный',
					width:'69',
					dataIndex:'СчетМеждународный',
					flex:1,
				},
				{
					text:'Субконто межд.',
					width:'128',
					dataIndex:'СубконтоМежд1',
					flex:1,
				},
				{
					text:'',
					width:'128',
					dataIndex:'СубконтоМежд2',
					flex:1,
				},
				{
					text:'',
					width:'128',
					dataIndex:'СубконтоМежд3',
					flex:1,
				},
				{
					text:'Реквизит',
					width:'103',
					dataIndex:'РеквизитПредставление',
					flex:1,
				},
				{
					text:'Значение',
					width:'103',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'85',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСоответствияСчетовБУиМСФО/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Учитывается',
					},
					{
						name:'СчетХозрасчетный',
					},
					{
						name:'ВидДвижения',
					},
					{
						name:'СубконтоХозр1',
					},
					{
						name:'СубконтоХозр2',
					},
					{
						name:'СубконтоХозр3',
					},
					{
						name:'СчетМеждународный',
					},
					{
						name:'СубконтоМежд1',
					},
					{
						name:'СубконтоМежд2',
					},
					{
						name:'СубконтоМежд3',
					},
					{
						name:'РеквизитПредставление',
					},
					{
						name:'Значение',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Исключения проводок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Учитывается',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'55',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт 1',
					width:'224',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'Субконто Дт 2',
					width:'224',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'Субконто Дт 3',
					width:'224',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'58',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт 1',
					width:'142',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'Субконто Кт 2',
					width:'142',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'Субконто Кт 3',
					width:'142',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'206',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСоответствияСчетовБУиМСФО/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Учитывается',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
				},
				'-',
			]
		},
					]
				},
			]
		},
	]
});