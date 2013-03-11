Ext.define('Справочники.НоменклатурныеУзлы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 528,
	iconCls: 'bogus',
	title: 'Номенклатурные узлы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
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
					text:'Состояние',
				},
				{
					text:'ДатаУтверждения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});