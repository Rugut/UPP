Ext.define('Справочники.Подразделения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 391,
	iconCls: 'bogus',
	title: 'Подразделения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:375px;height:318px;',
			height: 318,width: 375,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:391px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действия',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});