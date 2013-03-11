Ext.define('Справочники.Мероприятия.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 448,
	iconCls: 'bogus',
	title: 'Мероприятие предприятия',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:360px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:448px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:172px;width:432px;height:220px;',
			height: 220,width: 432,
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
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:94px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:94px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:148px;width:432px;height:24px;',
			items:
			[
				{
					text:'Действие23',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Действие24',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие20',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие18',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие22',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие25',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:400px;width:448px;height:25px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
			]
		},
	]
});