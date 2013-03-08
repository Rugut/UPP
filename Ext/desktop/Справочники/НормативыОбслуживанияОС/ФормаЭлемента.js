Ext.define('Справочники.НормативыОбслуживанияОС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 454,width: 404,
	iconCls: 'bogus',
	title: 'Нормативы обслуживания ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:356px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:402px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:92px;top:130px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:316px;top:130px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Услуга',
			style: 'position:absolute;left:92px;top:84px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьОбслуживания',
			style: 'position:absolute;left:136px;top:178px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:136px;top:202px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработки',
			style: 'position:absolute;left:136px;top:226px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеПараметраВыработкиОС',
			style: 'position:absolute;left:136px;top:250px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:92px;top:107px;width:120px;height:19px;',
		},
	]
});