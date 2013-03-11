Ext.define('Справочники.НастройкиОбменаДанными.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 551,width: 507,
	iconCls: 'bogus',
	title: 'Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:507px;height:25px;',
			items:
			[
				{
					text:'ВвестиНаОсновании',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВвестиНаОсновании',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ЗарегистрироватьВсеОбъектыДляОбмена',
				},
				{
					text:'ПроизвестиОбменДанными',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеЧтениеИЗаписьСообщений',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:507px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:460px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:500px;width:398px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:438px;',
			height: 438,width: 492,
			items:
			[
				{
					title:'ОтправкаИПриемСообщений',
				},
				{
					title:'ОбменПоПравилам',
				},
				{
					title:'ИнтерактивныйОбмен',
				},
				{
					title:'НастройкиАвтоматическогоВыполненияОбменов',
				},
			]
		},
	]
});