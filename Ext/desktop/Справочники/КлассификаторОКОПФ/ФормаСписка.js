Ext.define('Справочники.КлассификаторОКОПФ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 476,
	iconCls: 'bogus',
	title: 'Справочник Классификатор ОКОПФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
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
					text:'НаименованиеПолное',
				},
				{
					text:'БыстрыйВыбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});