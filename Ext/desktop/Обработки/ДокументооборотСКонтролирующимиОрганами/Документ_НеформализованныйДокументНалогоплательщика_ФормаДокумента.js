Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 476,width: 591,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:57px;width:477px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			items:
			[
				{
					text:'Отправка',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'ВКонвертИПодписать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ЦиклыОбмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ВКонверт',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:451px;width:591px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:33px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:251px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:575px;height:291px;',
			height: 291,width: 575,
			items:
			[
				{
					title:'Текст',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Содержимое',
			style: 'position:absolute;left:0px;top:28px;width:575px;height:263px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тема',
			style: 'position:absolute;left:98px;top:4px;width:426px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:526px;top:0px;width:49px;height:25px;',
			items:
			[
				{
					text:'Загрузить',
				},
				{
					text:'Выгрузить',
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:526px;top:0px;width:49px;height:25px;',
			items:
			[
				{
					text:'Загрузить',
				},
				{
					text:'Выгрузить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрацияВИФНС',
			style: 'position:absolute;left:106px;top:81px;width:477px;height:19px;',
		},
	]
});