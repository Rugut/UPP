Ext.define('Справочники.Регионы.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 722,
	iconCls: 'bogus',
	title: 'Заполнение справочника Регионы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:722px;height:25px;',
			items:
			[
				{
					text:'ДополнитьСправочник',
				},
				{
					text:'ОбновитьСписок',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:234px;top:32px;width:480px;height:385px;',
			height: 385,width: 480,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
				{
					text:'Ссылка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:422px;top:231px;width:155px;height:129px;',
			items:
			[
				{
					text:'ПометитьТекущийУровнь',
				},
				{
					text:'СброситьТекущийУровень',
				},
				{
					text:'СброситьВключеннные',
				},
				{
					text:'ПометитьВключеннные',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РодительскийРегион',
			style: 'position:absolute;left:199px;top:8px;width:515px;height:19px;',
		},
	]
});