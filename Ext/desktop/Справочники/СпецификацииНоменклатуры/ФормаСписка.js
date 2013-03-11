Ext.define('Справочники.СпецификацииНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 780,
	iconCls: 'bogus',
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:598px;height:280px;',
			height: 280,width: 598,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'КодВерсии',
				},
				{
					text:'Наименование',
				},
				{
					text:'Активная',
				},
				{
					text:'ВидСпецификации',
				},
				{
					text:'Состояние',
				},
				{
					text:'ДатаУтверждения',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ВерсииСпецификации',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});