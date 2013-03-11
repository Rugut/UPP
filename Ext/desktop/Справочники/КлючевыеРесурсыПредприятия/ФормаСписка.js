Ext.define('Справочники.КлючевыеРесурсыПредприятия.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 712,
	iconCls: 'bogus',
	title: 'Ключевые ресурсы предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:530px;height:280px;',
			height: 280,width: 530,
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
					text:'БазоваяЕдиницаИзмерения',
				},
				{
					text:'БазаЗаданияПотребности',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			items:
			[
			]
		},
	]
});