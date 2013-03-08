Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 501,width: 473,
	iconCls: 'bogus',
	title: 'Обработка обслуживания ТО',
	
	items: [
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