Ext.define('Справочники.Вакансии.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 408,width: 811,
	iconCls: 'bogus',
	title: 'Вакансия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:811px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:811px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:705px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:105px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:148px;top:33px;width:248px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:388px;height:24px;',
			height: 24,width: 388,
			items:
			[
				{
					title:'ПоСтруктуреЮридическихЛиц',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:140px;top:0px;width:248px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:148px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлановаяДатаЗакрытия',
			style: 'position:absolute;left:555px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаВакансию',
			style: 'position:absolute;left:555px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заявитель',
			style: 'position:absolute;left:555px;top:106px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Требования',
			style: 'position:absolute;left:8px;top:216px;width:795px;height:70px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Обязанности',
			style: 'position:absolute;left:8px;top:305px;width:388px;height:70px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условия',
			style: 'position:absolute;left:415px;top:305px;width:388px;height:70px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОткрытия',
			style: 'position:absolute;left:555px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗакрытия',
			style: 'position:absolute;left:723px;top:57px;width:80px;height:19px;',
		},
	]
});