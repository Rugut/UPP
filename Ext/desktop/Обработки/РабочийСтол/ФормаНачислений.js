Ext.define('Обработки.РабочийСтол.ФормаНачислений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:745px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			items:
			[
				'-',
				{
					text:'Данные по организациям',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:33px;width:367px;height:497px;',
			height: 497,width: 367,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:367px;height:256px;',
			height: 256,width: 367,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Способ расчета',
					width:'120',
				},
				{
					text:'Категория начисления',
					width:'120',
				},
				{
					text:'Вид времени',
					width:'120',
				},
				{
					text:'Учет рабочего времени',
					width:'120',
				},
				{
					text:'Учет по НДФЛ',
					width:'80',
				},
				{
					text:'Учет по ЕСН',
					width:'80',
				},
				{
					text:'Расход по ст.255 НК',
					width:'100',
				},
				{
					text:'Учет по ЕНВД',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:304px;width:367px;height:193px;',
			height: 193,width: 367,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Способ расчета',
					width:'120',
				},
				{
					text:'Категория начисления',
					width:'120',
				},
				{
					text:'Код дохода НДФЛ',
					width:'120',
				},
				{
					text:'Учет по ЕСН',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:352px;height:497px;',
			height: 497,width: 352,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:352px;height:476px;',
			height: 476,width: 352,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'46',
				},
				{
					text:'Наименование',
					width:'152',
				},
				{
					text:'Категория расчета',
					width:'69',
				},
				{
					text:'Способ отражения в упр учете',
					width:'90',
				},
			]
		},
					]
				},
			]
		},
	]
});