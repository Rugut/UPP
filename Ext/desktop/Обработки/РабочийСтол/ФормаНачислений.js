Ext.define('Обработки.РабочийСтол.ФормаНачислений',
	{
	extend: 'Ext.window.Window',
	height: 538,width: 745,
	iconCls: 'bogus',
	title: 'Начисления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказыватьПоОрганизациям',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:33px;width:367px;height:497px;',
			height: 497,width: 367,
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'СпособРасчета',
				},
				{
					text:'КатегорияРасчета',
				},
				{
					text:'ВидВремени',
				},
				{
					text:'ОбозначениеВТабелеУчетаРабочегоВремени',
				},
				{
					text:'КодДоходаНДФЛ',
				},
				{
					text:'КодДоходаЕСН',
				},
				{
					text:'ВидНачисленияПоСт255НК',
				},
				{
					text:'ОтнесениеРасходовКДеятельностиЕНВД',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'СпособРасчета',
				},
				{
					text:'КатегорияРасчета',
				},
				{
					text:'КодДоходаНДФЛ',
				},
				{
					text:'КодДоходаЕСН',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'КатегорияРасчета',
				},
				{
					text:'СпособОтраженияВУпрУчете',
				},
			]
		},
					]
				},
			]
		},
	]
});