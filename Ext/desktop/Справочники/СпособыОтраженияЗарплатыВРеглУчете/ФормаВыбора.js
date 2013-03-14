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
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'Счет НУ',
					width:'80',
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Кт НУ',
					width:'77',
				},
				{
					text:'Субконто Кт НУ',
					width:'79',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'83',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
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
				},
			]
		},
	]
});