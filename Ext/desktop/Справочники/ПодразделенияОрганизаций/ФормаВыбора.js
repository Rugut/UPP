Ext.define('Справочники.ПодразделенияОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 441,
	iconCls: 'bogus',
	title: 'Подразделения организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:425px;height:315px;',
			height: 315,width: 425,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:441px;height:25px;',
			items:
			[
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:200px;height:19px;',
		},
	]
});