Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 674,
	iconCls: 'bogus',
	title: 'Технологические карты производства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:492px;height:320px;',
			height: 320,width: 492,
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
				{
					text:'Подразделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});