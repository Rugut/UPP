Ext.define('Справочники.Помещения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 348,width: 543,
	iconCls: 'bogus',
	title: 'Помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:526px;height:307px;',
			height: 307,width: 526,
			columns:
			[
				{
					text:'Территория',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДляВстреч',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:443px;top:0px;width:99px;height:25px;',
			items:
			[
				{
					text:'Территории',
				},
			]
		},
	]
});