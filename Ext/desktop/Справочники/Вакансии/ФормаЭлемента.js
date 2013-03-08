Ext.define('Справочники.Вакансии.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 408,width: 811,
	iconCls: 'bogus',
	title: 'Вакансия',
	
	items: [
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