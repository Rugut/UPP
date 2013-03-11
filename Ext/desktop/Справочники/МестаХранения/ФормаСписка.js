Ext.define('Справочники.МестаХранения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 620,
	iconCls: 'bogus',
	title: 'Места хранения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:438px;height:279px;',
			height: 279,width: 438,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Владелец',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:279px;',
			height: 279,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});