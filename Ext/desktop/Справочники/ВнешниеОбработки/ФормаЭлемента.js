Ext.define('Справочники.ВнешниеОбработки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 386,width: 618,
	iconCls: 'bogus',
	title: 'Регистрация внешней обработки, печатной формы,  обработки по заполнению табличных частей',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:325px;top:33px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбработки',
			style: 'position:absolute;left:39px;top:57px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:39px;top:33px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:325px;top:57px;width:285px;height:19px;',
		},
	]
});