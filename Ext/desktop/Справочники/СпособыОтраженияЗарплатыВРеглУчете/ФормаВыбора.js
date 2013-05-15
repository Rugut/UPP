Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:748px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:33px;width:557px;height:280px;',
			height: 280,width: 557,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Счет НУ',
					width:'80',
					dataIndex:'СчетНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
					dataIndex:'СубконтоДтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ3',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'77',
					dataIndex:'СчетКтНУ',
					flex:1,
				},
				{
					text:'Субконто Кт НУ',
					width:'79',
					dataIndex:'СубконтоКтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ3',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'83',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияЗарплатыВРеглУчете/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
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
						name:'СпособРаспределенияЗатрат',
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
						name:'СчетНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:169px;height:280px;',
			height: 280,width: 169,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияЗарплатыВРеглУчете/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
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