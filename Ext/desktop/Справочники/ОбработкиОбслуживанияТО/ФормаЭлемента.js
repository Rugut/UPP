Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 501,width: 473,
	iconCls: 'bogus',
	title: 'Обработка обслуживания ТО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			items:
			[
				{
					text:'Действия',
				},
				{
					text:'Перечитать',
				},
				{
					text:'НайтиВСписке',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Экспорт',
				},
				{
					text:'Действие1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:473px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:113px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:385px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Обработка',
			style: 'position:absolute;left:113px;top:78px;width:302px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:113px;top:102px;width:352px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:113px;top:126px;width:352px;height:46px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:457px;height:192px;',
			height: 192,width: 457,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Модель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Версия',
			style: 'position:absolute;left:113px;top:201px;width:352px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:113px;top:225px;width:352px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВерсияAPI',
			style: 'position:absolute;left:113px;top:177px;width:352px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиССайта',
			text: '',
			style: 'position:absolute;left:445px;top:78px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиИзКаталога',
			text: '',
			style: 'position:absolute;left:420px;top:78px;width:20px;height:19px;',
		},
	]
});