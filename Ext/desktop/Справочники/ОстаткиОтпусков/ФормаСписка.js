Ext.define('Справочники.ОстаткиОтпусков.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Остатки отпусков прошлых лет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Физлицо',
				},
				{
					text:'ДатаАктуальности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:176px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'Количество',
				},
				{
					text:'ДатаНачалаРабочегоГода',
				},
				{
					text:'ДатаОкончанияРабочегоГода',
				},
			]
		},
	]
});